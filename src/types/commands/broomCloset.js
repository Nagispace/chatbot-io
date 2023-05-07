import Command from './command';

export default class BroomClosetCommand extends Command {
    constructor() {
        super('go to the broom closet', () => "I'm in the broom closety now!");
    }
}
