import type { GrabRecord, RedPacket, UserProfile } from '@/types'

const STORAGE_KEYS = {
  PACKETS: 'red_packets',
  RECORDS: 'grab_records',
  USERS: 'user_profiles'
}

export const storage = {
  getPackets(): Record<string, RedPacket> {
    const data = localStorage.getItem(STORAGE_KEYS.PACKETS)
    return data ? JSON.parse(data) : {}
  },

  setPackets(packets: Record<string, RedPacket>): void {
    localStorage.setItem(STORAGE_KEYS.PACKETS, JSON.stringify(packets))
  },

  getRecords(): GrabRecord[] {
    const data = localStorage.getItem(STORAGE_KEYS.RECORDS)
    return data ? JSON.parse(data) : []
  },

  setRecords(records: GrabRecord[]): void {
    localStorage.setItem(STORAGE_KEYS.RECORDS, JSON.stringify(records))
  },

  getUsers(): Record<string, UserProfile> {
    const data = localStorage.getItem(STORAGE_KEYS.USERS)
    return data ? JSON.parse(data) : {}
  },

  setUsers(users: Record<string, UserProfile>): void {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users))
  },

  // 初始化存储，如果本地存储为空则使用默认数据
  initializeStorage(defaultData: {
    packets: Record<string, RedPacket>,
    records: GrabRecord[],
    users: Record<string, UserProfile>
  }): void {
    if (!localStorage.getItem(STORAGE_KEYS.PACKETS)) {
      this.setPackets(defaultData.packets)
    }
    if (!localStorage.getItem(STORAGE_KEYS.RECORDS)) {
      this.setRecords(defaultData.records)
    }
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
      this.setUsers(defaultData.users)
    }
  }
}