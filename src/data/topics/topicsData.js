import { managementTopics } from "./management";
import { blockchainTopics } from "./blockchain";
import { aiTopics } from "./ai";
import { dataTopics } from "./data";


// Keep the main catalog lean: non-data topics + one aggregated data section
const topics = [managementTopics, blockchainTopics, aiTopics, dataTopics];
export default topics;