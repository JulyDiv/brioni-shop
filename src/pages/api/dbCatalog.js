import { dbCatalog } from './data/dbCatalog';

export default function handler(req, res) {
    res.status(200).json(dbCatalog);
}