import { packets, users, records } from './data'
import type { GrabRecord, RedPacket, UserProfile } from '@/types'

function randomAmount(leftAmount: number, leftCount: number): number {
	if (leftCount === 1) return Number(leftAmount.toFixed(2))
	const max = (leftAmount / leftCount) * 2
	const amount = Math.max(0.01, Number((Math.random() * max).toFixed(2)))
	return amount > leftAmount ? Number(leftAmount.toFixed(2)) : amount
}

export const mockApi = {
	async listPackets(): Promise<RedPacket[]> {
		return Object.values(packets)
	},

	async getPacket(id: string): Promise<RedPacket | undefined> {
		return packets[id]
	},

	async grab(packetId: string, userId: string): Promise<GrabRecord> {
		const packet = packets[packetId]
		if (!packet) throw new Error('红包不存在')
		const now = Date.now()
		if (now < packet.startAt) throw new Error('活动未开始')
		if (now > packet.endAt) throw new Error('活动已结束')
		if (packet.leftCount <= 0 || packet.leftAmount <= 0) throw new Error('已抢完')

		const amount = randomAmount(packet.leftAmount, packet.leftCount)
		packet.leftAmount = Number((packet.leftAmount - amount).toFixed(2))
		packet.leftCount -= 1

		const user = users[userId]
		if (!user) throw new Error('用户不存在')
		user.balance = Number((user.balance + amount).toFixed(2))

		const record: GrabRecord = {
			id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
			packetId,
			userId,
			amount,
			createdAt: now,
		}
		records.unshift(record)
		return record
	},

	async listRecords(userId?: string): Promise<GrabRecord[]> {
		return userId ? records.filter(r => r.userId === userId) : records
	},

	async getUser(userId: string): Promise<UserProfile | undefined> {
		return users[userId]
	},

	async createPacket(payload: Pick<RedPacket, 'title' | 'totalAmount' | 'count' | 'startAt' | 'endAt'>): Promise<RedPacket> {
		const id = `p${Object.keys(packets).length + 1}`
		const packet: RedPacket = {
			id,
			title: payload.title,
			totalAmount: Number(payload.totalAmount.toFixed(2)),
			leftAmount: Number(payload.totalAmount.toFixed(2)),
			count: payload.count,
			leftCount: payload.count,
			startAt: payload.startAt,
			endAt: payload.endAt,
		}
		packets[id] = packet
		return packet
	},
}


