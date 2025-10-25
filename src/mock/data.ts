import type { RedPacket, GrabRecord, UserProfile } from '@/types'

export const users: Record<string, UserProfile> = {
	'u1': { id: 'u1', nickname: 'Alice', balance: 0 },
	'u2': { id: 'u2', nickname: 'Bob', balance: 0 },
	'u3': { id: 'u3', nickname: 'Charlie', balance: 0 },
	'u4': { id: 'u4', nickname: 'Diana', balance: 0 },
	'u5': { id: 'u5', nickname: 'Ethan', balance: 0 },
	'u6': { id: 'u6', nickname: 'Fiona', balance: 0 },
	'u7': { id: 'u7', nickname: 'George', balance: 0 },
	'u8': { id: 'u8', nickname: 'Hannah', balance: 0 },
	'u9': { id: 'u9', nickname: 'Ivan', balance: 0 },
	'u10': { id: 'u10', nickname: 'Julia', balance: 0 },
}

export const packets: Record<string, RedPacket> = {
	'p1': {
		id: 'p1',
		title: '班级福利红包',
		totalAmount: 100,
		leftAmount: 100,
		count: 10,
		leftCount: 10,
		startAt: Date.now() - 60_000,
		endAt: Date.now() + 60 * 60_000,
		style: 'normal'
	},
	'p2': {
		id: 'p2',
		title: '生日快乐红包',
		totalAmount: 50,
		leftAmount: 50,
		count: 5,
		leftCount: 5,
		startAt: Date.now() - 10_000,
		endAt: Date.now() + 30 * 60_000,
		style: 'birthday'
	},
	'p3': {
		id: 'p3',
		title: '国庆节红包',
		totalAmount: 88,
		leftAmount: 88,
		count: 8,
		leftCount: 8,
		startAt: Date.now(),
		endAt: Date.now() + 24 * 60 * 60_000,
		style: 'festival'
	}
}

export const records: GrabRecord[] = []


