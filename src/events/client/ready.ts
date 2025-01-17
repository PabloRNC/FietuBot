import type { Client } from 'discord.js'

import { Events } from '../../classes/Event'

export default class Ready extends Events {
	public constructor () {
		super({
			async run (client: Client) {
				console.log(`${client.user?.username} is online!`)
			}
		})
	}
}
