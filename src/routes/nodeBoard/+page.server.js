import db from '$db/mongo';

export async function load(event) {
    try {
        const board = await db.collection('board').find({}, {projection: {_id: 0}}).toArray();
        console.log(board);
        return { 
            data: board
        }
    } catch(e) {
        console.error(e);
    }
}