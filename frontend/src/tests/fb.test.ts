import {MyGame} from "../monster_generated";
import Monster = MyGame.Impl.Monster;
import {flatbuffers} from "flatbuffers"
import * as request from "request";


async function testFlatbufEndpoint() {
    // let builder = new flatbuffers.Builder(1024);
    // Monster.startMonster(builder);
    // Monster.endMonster(builder);
    // let client = new rm.HttpClient('fc');
    // let body = await (await client.get("http://localhost:8080/")).readBody();
    await request.get("http://localhost:8080/", { encoding: null })
        .on("complete", function (resp) {
            console.log("status code is "+resp.statusCode);
            let monsterB = resp.body as Buffer;
            let monsterBytesBuffer = new flatbuffers.ByteBuffer(monsterB);
            let monster = Monster.getRootAsMonster(monsterBytesBuffer);
            console.log( "hp is "+monster.hp());
        });
    // console.log("request "+JSON.stringify(monsterReq.response));
    // monsterReq.
    // console.log("bytes length is "+monsterBytes.len);
    // let monsterBytesBuffer = new flatbuffers.ByteBuffer(monsterBytes);
    // let monster = Monster.getRootAsMonster(monsterBytesBuffer);
    // console.log( "hp is "+monster.hp());

}

testFlatbufEndpoint();