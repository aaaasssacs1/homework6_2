import { mockApi } from '@/mock/server'
import type { GrabRecord, RedPacket, UserProfile } from '@/types'

export const api = {
	listPackets(): Promise<RedPacket[]> {
		return mockApi.listPackets()
	},
	getPacket(id: string): Promise<RedPacket | undefined> {
		return mockApi.getPacket(id)
	},
	grab(packetId: string, userId: string): Promise<GrabRecord> {
		return mockApi.grab(packetId, userId)
	},
	listRecords(userId?: string): Promise<GrabRecord[]> {
		return mockApi.listRecords(userId)
	},
	getUser(userId: string): Promise<UserProfile | undefined> {
		return mockApi.getUser(userId)
	},
	createPacket(payload: { title: string; totalAmount: number; count: number; startAt: number; endAt: number }): Promise<RedPacket> {
		return mockApi.createPacket(payload)
	},
}


