export class Event {
  conversations: string[] = null;
  constructor(public name: string, public date: string, attendees: string[]) {}
}
