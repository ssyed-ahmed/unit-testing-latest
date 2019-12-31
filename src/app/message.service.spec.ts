import { MessageService } from "./message.service"

describe('MessageService', () => {

    let service: MessageService;

    beforeEach(() => {
        service = new MessageService();
    })

    it('should return no messages when there are no messages', () => {
        expect(service.messages.length).toBe(0);
    })

    it('should add messages when add method is called', () => {
        service.add('message 1');

        expect(service.messages.length).toBe(1);
    })

    it('should clear messages when clear method is called', () => {
        service.add('message 1');
        service.clear();

        expect(service.messages.length).toBe(0);
    })
})