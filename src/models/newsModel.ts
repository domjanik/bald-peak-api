export default class News {
    constructor(data: any, creator: any) {
        if (this.validate(data)) {
            this.title = data.title;
            this.content = data.content;
            this.description = data.description;
            this.date = new Date();
            this.creator = creator.id;
            this.avatarId = data.avatarId;
        } else {
            throw new Error('Invalid data');
        }
    }
    id: number;
    title: string;
    description: string;
    content: string;
    date: Date;
    creator: string;
    avatarId: string;

    validate(data: any): boolean {
        let valid = true;
        if (!data.title || data.title.length === 0) {
            valid = false;
        } else if (!data.content || data.content.length === 0) {
            valid = false;
        }
        return valid;
    }
}
