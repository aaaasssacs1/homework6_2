import { defineStore } from 'pinia'
import { api } from '@/utils/api'
import type { GrabRecord, RedPacket } from '@/types'

export const useRedPacketStore = defineStore('redPacket', {
	state: () => ({
		packets: [] as RedPacket[],
		records: [] as GrabRecord[],
		loading: false as boolean,
		error: '' as string,
	}),
	actions: {
		async fetchPackets() {
			this.loading = true
			this.error = ''
			try {
				this.packets = await api.listPackets()
			} catch (e: any) {
				this.error = e?.message ?? '加载红包失败'
			} finally {
				this.loading = false
			}
		},
		async fetchRecords(userId?: string) {
			this.loading = true
			this.error = ''
			try {
				this.records = await api.listRecords(userId)
			} catch (e: any) {
				this.error = e?.message ?? '加载记录失败'
			} finally {
				this.loading = false
			}
		},
		async grab(packetId: string, userId: string) {
			this.loading = true
			this.error = ''
			try {
				const result = await api.grab(packetId, userId)
				await this.fetchPackets()
				await this.fetchRecords(userId)
				return result
			} catch (e: any) {
				this.error = e?.message ?? '抢红包失败'
				throw e
			} finally {
				this.loading = false
			}
		},
		async createPacket(payload: { title: string; totalAmount: number; count: number; startAt: number; endAt: number }) {
			this.loading = true
			this.error = ''
			try {
				const packet = await api.createPacket(payload)
				await this.fetchPackets()
				return packet
			} catch (e: any) {
				this.error = e?.message ?? '创建红包失败'
				throw e
			} finally {
				this.loading = false
			}
		},
	},
})


