import { MatchResponse } from "@grober/api";
import { MatchRequest } from "@grober/api";
import { InjectRedis } from "@nestjs-modules/ioredis";
import { Inject, Injectable } from "@nestjs/common";
import Redis from "ioredis";

@Injectable()
export class MatchService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
  ) {}

  async joinMatch(playerId: number): Promise<MatchResponse> {
    // TODO: 加入匹配池
    return { usersId: [playerId,], roomId: 1 };
  }

  async createRoom(playerIds: number[]){
    //TODO: 创建游戏房间
  }



}