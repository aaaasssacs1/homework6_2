import { storage } from '@/utils/storage'
import type { GrabRecord, RedPacket, UserProfile } from '@/types'
import { packets as defaultPackets, users as defaultUsers, records as defaultRecords } from './data'

// 初始化存储
storage.initializeStorage({
  packets: defaultPackets,
  records: defaultRecords,
  users: defaultUsers
})

function randomAmount(leftAmount: number, leftCount: number): number {
  if (leftCount === 1) return Number(leftAmount.toFixed(2))
  const max = (leftAmount / leftCount) * 2
  const amount = Math.max(0.01, Number((Math.random() * max).toFixed(2)))
  return amount > leftAmount ? Number(leftAmount.toFixed(2)) : amount
}

export const mockApi = {
  async listPackets(): Promise<RedPacket[]> {
    const packets = storage.getPackets()
    return Object.values(packets)
  },

  async getPacket(id: string): Promise<RedPacket | undefined> {
    const packets = storage.getPackets()
    return packets[id]
  },

  async grab(packetId: string, userId: string): Promise<GrabRecord> {
    const packets = storage.getPackets()
    const packet = packets[packetId]
    if (!packet) throw new Error('红包不存在')
    
    const now = Date.now()
    if (now < packet.startAt) throw new Error('活动未开始')
    if (now > packet.endAt) throw new Error('活动已结束')
    if (packet.leftCount <= 0 || packet.leftAmount <= 0) throw new Error('已抢完')

    const amount = randomAmount(packet.leftAmount, packet.leftCount)
    packet.leftAmount = Number((packet.leftAmount - amount).toFixed(2))
    packet.leftCount -= 1

    const users = storage.getUsers()
    const user = users[userId]
    if (!user) throw new Error('用户不存在')
    user.balance = Number((user.balance + amount).toFixed(2))

    // 更新状态
    storage.setPackets(packets)
    storage.setUsers(users)

    const record: GrabRecord = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      packetId,
      userId,
      amount,
      createdAt: now,
    }

    const records = storage.getRecords()
    records.unshift(record)
    storage.setRecords(records)

    return record
  },

  async listRecords(userId?: string): Promise<GrabRecord[]> {
    const records = storage.getRecords()
    return userId ? records.filter(r => r.userId === userId) : records
  },

	async getUser(userId: string): Promise<UserProfile | undefined> {
    const users = storage.getUsers()
    return users[userId]
  },

  async createPacket(payload: Pick<RedPacket, 'title' | 'totalAmount' | 'count' | 'startAt' | 'endAt'>): Promise<RedPacket> {
    const packets = storage.getPackets()
    const id = `p_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    const packet: RedPacket = {
      id,
      title: payload.title,
      totalAmount: Number(payload.totalAmount.toFixed(2)),
      leftAmount: Number(payload.totalAmount.toFixed(2)),
      count: payload.count,
      leftCount: payload.count,
      startAt: payload.startAt,
      endAt: payload.endAt,
      style: 'normal', // 默认使用普通红包样式
    }
    packets[id] = packet
    storage.setPackets(packets)
    return packet
  },
}


