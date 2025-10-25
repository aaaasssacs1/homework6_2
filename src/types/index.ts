export interface RedPacket {
	id: string
	title: string
	totalAmount: number
	leftAmount: number
	count: number
	leftCount: number
	startAt: number
	endAt: number
}

export interface GrabRecord {
	id: string
	packetId: string
	userId: string
	amount: number
	createdAt: number
}

export interface UserProfile {
	id: string
	nickname: string
	balance: number
}


