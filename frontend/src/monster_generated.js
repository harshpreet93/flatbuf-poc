"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @enum
 */
var MyGame;
(function (MyGame) {
    var Impl;
    (function (Impl) {
        var Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color = Impl.Color || (Impl.Color = {}));
    })(Impl = MyGame.Impl || (MyGame.Impl = {}));
})(MyGame = exports.MyGame || (exports.MyGame = {}));
;
/**
 * @enum
 */
(function (MyGame) {
    var Impl;
    (function (Impl) {
        var Equipment;
        (function (Equipment) {
            Equipment[Equipment["NONE"] = 0] = "NONE";
            Equipment[Equipment["Weapon"] = 1] = "Weapon";
        })(Equipment = Impl.Equipment || (Impl.Equipment = {}));
    })(Impl = MyGame.Impl || (MyGame.Impl = {}));
})(MyGame = exports.MyGame || (exports.MyGame = {}));
;
/**
 * @constructor
 */
(function (MyGame) {
    var Impl;
    (function (Impl) {
        var Vec3 = /** @class */ (function () {
            function Vec3() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns Vec3
             */
            Vec3.prototype.__init = function (i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            };
            ;
            /**
             * @returns number
             */
            Vec3.prototype.x = function () {
                return this.bb.readFloat32(this.bb_pos);
            };
            ;
            /**
             * @returns number
             */
            Vec3.prototype.y = function () {
                return this.bb.readFloat32(this.bb_pos + 4);
            };
            ;
            /**
             * @returns number
             */
            Vec3.prototype.z = function () {
                return this.bb.readFloat32(this.bb_pos + 8);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param number x
             * @param number y
             * @param number z
             * @returns flatbuffers.Offset
             */
            Vec3.createVec3 = function (builder, x, y, z) {
                builder.prep(4, 12);
                builder.writeFloat32(z);
                builder.writeFloat32(y);
                builder.writeFloat32(x);
                return builder.offset();
            };
            ;
            return Vec3;
        }());
        Impl.Vec3 = Vec3;
    })(Impl = MyGame.Impl || (MyGame.Impl = {}));
})(MyGame = exports.MyGame || (exports.MyGame = {}));
/**
 * @constructor
 */
(function (MyGame) {
    var Impl;
    (function (Impl) {
        var Monster = /** @class */ (function () {
            function Monster() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns Monster
             */
            Monster.prototype.__init = function (i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            };
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param Monster= obj
             * @returns Monster
             */
            Monster.getRootAsMonster = function (bb, obj) {
                return (obj || new Monster).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            };
            ;
            /**
             * @param MyGame.Impl.Vec3= obj
             * @returns MyGame.Impl.Vec3|null
             */
            Monster.prototype.pos = function (obj) {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? (obj || new MyGame.Impl.Vec3).__init(this.bb_pos + offset, this.bb) : null;
            };
            ;
            /**
             * @returns number
             */
            Monster.prototype.mana = function () {
                var offset = this.bb.__offset(this.bb_pos, 6);
                return offset ? this.bb.readInt16(this.bb_pos + offset) : 150;
            };
            ;
            /**
             * @returns number
             */
            Monster.prototype.hp = function () {
                var offset = this.bb.__offset(this.bb_pos, 8);
                return offset ? this.bb.readInt16(this.bb_pos + offset) : 100;
            };
            ;
            Monster.prototype.name = function (optionalEncoding) {
                var offset = this.bb.__offset(this.bb_pos, 10);
                return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
            };
            ;
            /**
             * @param number index
             * @returns number
             */
            Monster.prototype.inventory = function (index) {
                var offset = this.bb.__offset(this.bb_pos, 14);
                return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
            };
            ;
            /**
             * @returns number
             */
            Monster.prototype.inventoryLength = function () {
                var offset = this.bb.__offset(this.bb_pos, 14);
                return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
            };
            ;
            /**
             * @returns Uint8Array
             */
            Monster.prototype.inventoryArray = function () {
                var offset = this.bb.__offset(this.bb_pos, 14);
                return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
            };
            ;
            /**
             * @returns MyGame.Impl.Color
             */
            Monster.prototype.color = function () {
                var offset = this.bb.__offset(this.bb_pos, 16);
                return offset ? /**  */ (this.bb.readInt8(this.bb_pos + offset)) : MyGame.Impl.Color.Blue;
            };
            ;
            /**
             * @param number index
             * @param MyGame.Impl.Weapon= obj
             * @returns MyGame.Impl.Weapon
             */
            Monster.prototype.weapons = function (index, obj) {
                var offset = this.bb.__offset(this.bb_pos, 18);
                return offset ? (obj || new MyGame.Impl.Weapon).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
            };
            ;
            /**
             * @returns number
             */
            Monster.prototype.weaponsLength = function () {
                var offset = this.bb.__offset(this.bb_pos, 18);
                return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
            };
            ;
            /**
             * @returns MyGame.Impl.Equipment
             */
            Monster.prototype.equippedType = function () {
                var offset = this.bb.__offset(this.bb_pos, 20);
                return offset ? /**  */ (this.bb.readUint8(this.bb_pos + offset)) : MyGame.Impl.Equipment.NONE;
            };
            ;
            /**
             * @param flatbuffers.Table obj
             * @returns ?flatbuffers.Table
             */
            Monster.prototype.equipped = function (obj) {
                var offset = this.bb.__offset(this.bb_pos, 22);
                return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
            };
            ;
            /**
             * @param number index
             * @param MyGame.Impl.Vec3= obj
             * @returns MyGame.Impl.Vec3
             */
            Monster.prototype.path = function (index, obj) {
                var offset = this.bb.__offset(this.bb_pos, 24);
                return offset ? (obj || new MyGame.Impl.Vec3).__init(this.bb.__vector(this.bb_pos + offset) + index * 12, this.bb) : null;
            };
            ;
            /**
             * @returns number
             */
            Monster.prototype.pathLength = function () {
                var offset = this.bb.__offset(this.bb_pos, 24);
                return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            Monster.startMonster = function (builder) {
                builder.startObject(11);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset posOffset
             */
            Monster.addPos = function (builder, posOffset) {
                builder.addFieldStruct(0, posOffset, 0);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param number mana
             */
            Monster.addMana = function (builder, mana) {
                builder.addFieldInt16(1, mana, 150);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param number hp
             */
            Monster.addHp = function (builder, hp) {
                builder.addFieldInt16(2, hp, 100);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset nameOffset
             */
            Monster.addName = function (builder, nameOffset) {
                builder.addFieldOffset(3, nameOffset, 0);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset inventoryOffset
             */
            Monster.addInventory = function (builder, inventoryOffset) {
                builder.addFieldOffset(5, inventoryOffset, 0);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param Array.<number> data
             * @returns flatbuffers.Offset
             */
            Monster.createInventoryVector = function (builder, data) {
                builder.startVector(1, data.length, 1);
                for (var i = data.length - 1; i >= 0; i--) {
                    builder.addInt8(data[i]);
                }
                return builder.endVector();
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param number numElems
             */
            Monster.startInventoryVector = function (builder, numElems) {
                builder.startVector(1, numElems, 1);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param MyGame.Impl.Color color
             */
            Monster.addColor = function (builder, color) {
                builder.addFieldInt8(6, color, MyGame.Impl.Color.Blue);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset weaponsOffset
             */
            Monster.addWeapons = function (builder, weaponsOffset) {
                builder.addFieldOffset(7, weaponsOffset, 0);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param Array.<flatbuffers.Offset> data
             * @returns flatbuffers.Offset
             */
            Monster.createWeaponsVector = function (builder, data) {
                builder.startVector(4, data.length, 4);
                for (var i = data.length - 1; i >= 0; i--) {
                    builder.addOffset(data[i]);
                }
                return builder.endVector();
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param number numElems
             */
            Monster.startWeaponsVector = function (builder, numElems) {
                builder.startVector(4, numElems, 4);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param MyGame.Impl.Equipment equippedType
             */
            Monster.addEquippedType = function (builder, equippedType) {
                builder.addFieldInt8(8, equippedType, MyGame.Impl.Equipment.NONE);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset equippedOffset
             */
            Monster.addEquipped = function (builder, equippedOffset) {
                builder.addFieldOffset(9, equippedOffset, 0);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset pathOffset
             */
            Monster.addPath = function (builder, pathOffset) {
                builder.addFieldOffset(10, pathOffset, 0);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param number numElems
             */
            Monster.startPathVector = function (builder, numElems) {
                builder.startVector(12, numElems, 4);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            Monster.endMonster = function (builder) {
                var offset = builder.endObject();
                return offset;
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset offset
             */
            Monster.finishMonsterBuffer = function (builder, offset) {
                builder.finish(offset);
            };
            ;
            return Monster;
        }());
        Impl.Monster = Monster;
    })(Impl = MyGame.Impl || (MyGame.Impl = {}));
})(MyGame = exports.MyGame || (exports.MyGame = {}));
/**
 * @constructor
 */
(function (MyGame) {
    var Impl;
    (function (Impl) {
        var Weapon = /** @class */ (function () {
            function Weapon() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns Weapon
             */
            Weapon.prototype.__init = function (i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            };
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param Weapon= obj
             * @returns Weapon
             */
            Weapon.getRootAsWeapon = function (bb, obj) {
                return (obj || new Weapon).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            };
            ;
            Weapon.prototype.name = function (optionalEncoding) {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
            };
            ;
            /**
             * @returns number
             */
            Weapon.prototype.damage = function () {
                var offset = this.bb.__offset(this.bb_pos, 6);
                return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            Weapon.startWeapon = function (builder) {
                builder.startObject(2);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset nameOffset
             */
            Weapon.addName = function (builder, nameOffset) {
                builder.addFieldOffset(0, nameOffset, 0);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param number damage
             */
            Weapon.addDamage = function (builder, damage) {
                builder.addFieldInt16(1, damage, 0);
            };
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            Weapon.endWeapon = function (builder) {
                var offset = builder.endObject();
                return offset;
            };
            ;
            return Weapon;
        }());
        Impl.Weapon = Weapon;
    })(Impl = MyGame.Impl || (MyGame.Impl = {}));
})(MyGame = exports.MyGame || (exports.MyGame = {}));