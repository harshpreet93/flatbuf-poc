import {MyGame} from "./monster_generated";
import Monster = MyGame.Impl.Monster;

import * as rm from 'typed-rest-client/HttpClient'



export function sayHelloWorld(world: string) {
  return `Hello ${world}`;
}

async function callFlatbufEndpoint() {
  let builder = new flatbuffers.Builder(1024);
  Monster.startMonster(builder);
  Monster.endMonster(builder);
  let client = new rm.HttpClient('fc');
  let body = await (await client.get("localhost:8080/")).readBody();
  let monsterBytes = Buffer.from(body, "utf8");
  let monsterBytesBuffer = new flatbuffers.ByteBuffer(monsterBytes);
  let monster = Monster.getRootAsMonster(monsterBytesBuffer);
  monster.hp()
}

callFlatbufEndpoint();