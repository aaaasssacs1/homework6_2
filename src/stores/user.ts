import { defineStore } from 'pinia'
import { api } from '@/utils/api'
import type { UserProfile } from '@/types'

export const useUserStore = defineStore('user', {
	state: () => ({
		currentUserId: 'u1' as string,
		profile: null as UserProfile | null,
		loading: false as boolean,
		error: '' as string,
	}),
	actions: {
		async fetchProfile() {
			this.loading = true
			this.error = ''
			try {
				this.profile = await api.getUser(this.currentUserId) ?? null
			} catch (e: any) {
				this.error = e?.message ?? '加载用户失败'
			} finally {
				this.loading = false
			}
		},
		setUser(userId: string) {
			this.currentUserId = userId
		},
	},
})


