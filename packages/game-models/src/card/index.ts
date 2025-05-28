import { Effect } from "../effect";
import { Operation } from "../operation";
import { type CardType } from "../type";

export interface CardArgs {
  type: CardType;
  ownerId: number;
  name: string;
  cost: number;
  speed: number;
  operations?: Operation[];
  effects?: Effect[];
}

export abstract class Card {
  static cardNum: number = 0; // 卡牌数量计数器
  id: number; // 卡牌唯一标识符
  ownerId: number; // 卡牌拥有者id
  type: CardType; // 卡牌类型，用于标签分类
  name: string; // 卡牌名
  cost: number; // 卡牌消耗, 一般设计在 0-100之间
  speed: number; // 卡牌速度，在休闲模式下是比较数量大小，战争模式下有着不同的发射速度，一般设计在 0-10之间
  operations: Operation[]; // 卡牌元数据列表
  effects: Effect[]; // 卡牌元effect列表
  constructor(arg: CardArgs) {
    this.id = ++Card.cardNum;
    this.ownerId = arg.ownerId;
    this.name = arg.name;
    this.cost = arg.cost;
    this.speed = arg.speed;
    this.operations = arg.operations ?? [];
    this.effects = arg.effects ?? [];
    this.type = arg.type;
  }
}
