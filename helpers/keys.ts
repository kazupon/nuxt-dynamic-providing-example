import type { InjectionKey } from '@nuxtjs/composition-api'
import type { Emitter } from 'mitt'
import type { Events } from './events'

export const EventKey: InjectionKey<Emitter<Events>> = Symbol('Event')
