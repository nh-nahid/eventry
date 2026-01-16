import { eventModel } from "@/models/event-models";
import { replaceMongoIdInArray } from "@/utils/data-util";

async function getAllEvents() {
    const allEvents = await eventModel.find();

    return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId);
}
export {
    getAllEvents
}