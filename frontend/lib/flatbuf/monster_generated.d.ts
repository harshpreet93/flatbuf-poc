import { flatbuffers } from "./flatbuffers";
/**
 * @enum
 */
export declare namespace MyGame.Impl {
    enum Color {
        Red = 0,
        Green = 1,
        Blue = 2
    }
}
/**
 * @enum
 */
export declare namespace MyGame.Impl {
    enum Equipment {
        NONE = 0,
        Weapon = 1
    }
}
/**
 * @constructor
 */
export declare namespace MyGame.Impl {
    class Vec3 {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Vec3
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Vec3;
        /**
         * @returns number
         */
        x(): number;
        /**
         * @returns number
         */
        y(): number;
        /**
         * @returns number
         */
        z(): number;
        /**
         * @param flatbuffers.Builder builder
         * @param number x
         * @param number y
         * @param number z
         * @returns flatbuffers.Offset
         */
        static createVec3(builder: flatbuffers.Builder, x: number, y: number, z: number): flatbuffers.Offset;
    }
}
/**
 * @constructor
 */
export declare namespace MyGame.Impl {
    class Monster {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Monster
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Monster;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Monster= obj
         * @returns Monster
         */
        static getRootAsMonster(bb: flatbuffers.ByteBuffer, obj?: Monster): Monster;
        /**
         * @param MyGame.Impl.Vec3= obj
         * @returns MyGame.Impl.Vec3|null
         */
        pos(obj?: MyGame.Impl.Vec3): MyGame.Impl.Vec3 | null;
        /**
         * @returns number
         */
        mana(): number;
        /**
         * @returns number
         */
        hp(): number;
        /**
         * @param flatbuffers.Encoding= optionalEncoding
         * @returns string|Uint8Array|null
         */
        name(): string | null;
        name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
        /**
         * @param number index
         * @returns number
         */
        inventory(index: number): number | null;
        /**
         * @returns number
         */
        inventoryLength(): number;
        /**
         * @returns Uint8Array
         */
        inventoryArray(): Uint8Array | null;
        /**
         * @returns MyGame.Impl.Color
         */
        color(): MyGame.Impl.Color;
        /**
         * @param number index
         * @param MyGame.Impl.Weapon= obj
         * @returns MyGame.Impl.Weapon
         */
        weapons(index: number, obj?: MyGame.Impl.Weapon): MyGame.Impl.Weapon | null;
        /**
         * @returns number
         */
        weaponsLength(): number;
        /**
         * @returns MyGame.Impl.Equipment
         */
        equippedType(): MyGame.Impl.Equipment;
        /**
         * @param flatbuffers.Table obj
         * @returns ?flatbuffers.Table
         */
        equipped<T extends flatbuffers.Table>(obj: T): T | null;
        /**
         * @param number index
         * @param MyGame.Impl.Vec3= obj
         * @returns MyGame.Impl.Vec3
         */
        path(index: number, obj?: MyGame.Impl.Vec3): MyGame.Impl.Vec3 | null;
        /**
         * @returns number
         */
        pathLength(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startMonster(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset posOffset
         */
        static addPos(builder: flatbuffers.Builder, posOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number mana
         */
        static addMana(builder: flatbuffers.Builder, mana: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number hp
         */
        static addHp(builder: flatbuffers.Builder, hp: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset nameOffset
         */
        static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset inventoryOffset
         */
        static addInventory(builder: flatbuffers.Builder, inventoryOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<number> data
         * @returns flatbuffers.Offset
         */
        static createInventoryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startInventoryVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param MyGame.Impl.Color color
         */
        static addColor(builder: flatbuffers.Builder, color: MyGame.Impl.Color): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset weaponsOffset
         */
        static addWeapons(builder: flatbuffers.Builder, weaponsOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createWeaponsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startWeaponsVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @param MyGame.Impl.Equipment equippedType
         */
        static addEquippedType(builder: flatbuffers.Builder, equippedType: MyGame.Impl.Equipment): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset equippedOffset
         */
        static addEquipped(builder: flatbuffers.Builder, equippedOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset pathOffset
         */
        static addPath(builder: flatbuffers.Builder, pathOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startPathVector(builder: flatbuffers.Builder, numElems: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endMonster(builder: flatbuffers.Builder): flatbuffers.Offset;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset offset
         */
        static finishMonsterBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    }
}
/**
 * @constructor
 */
export declare namespace MyGame.Impl {
    class Weapon {
        bb: flatbuffers.ByteBuffer | null;
        bb_pos: number;
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns Weapon
         */
        __init(i: number, bb: flatbuffers.ByteBuffer): Weapon;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param Weapon= obj
         * @returns Weapon
         */
        static getRootAsWeapon(bb: flatbuffers.ByteBuffer, obj?: Weapon): Weapon;
        /**
         * @param flatbuffers.Encoding= optionalEncoding
         * @returns string|Uint8Array|null
         */
        name(): string | null;
        name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
        /**
         * @returns number
         */
        damage(): number;
        /**
         * @param flatbuffers.Builder builder
         */
        static startWeapon(builder: flatbuffers.Builder): void;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset nameOffset
         */
        static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
        /**
         * @param flatbuffers.Builder builder
         * @param number damage
         */
        static addDamage(builder: flatbuffers.Builder, damage: number): void;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endWeapon(builder: flatbuffers.Builder): flatbuffers.Offset;
    }
}
