import { Injectable, Logger } from '@nestjs/common';
import { MatchService } from './service';
import { MatchRequest, MatchResponse } from '@grober/api';

@Injectable()
export class GameService {
  private readonly logger = new Logger(GameService.name);
  constructor(
    private readonly matchService: MatchService,
  ) {}

  async joinMatch(playerId: number): Promise<MatchResponse>{
    // TODO 加入匹配池，此时已经建立了WS连接，不用返回，等待promise后发送匹配成功的信息
    const match = await this.matchService.joinMatch(playerId)
    return {
      usersId: match.usersId,
      roomId: match.roomId
    }
  }
  async playerReady(roomId: number, playerId: number){
    // TODO 玩家准备，当所有玩家准备后，调用StartGame
  }
  async StartGame(roomId: number){
    // TODO 开始游戏逻辑，广播房间初始信息
  }
  async EndGame(roomId: number){
    // TODO 结束游戏逻辑，广播房间结束信息，统计数据
  }
  async startTurn(roomId: number){
    // TODO 开始回合逻辑，广播回合开始信息
    // 主要是房间meta信息，玩家信息
  }
  async playerUseCard(roomId: number, playerId: number, cardIndex: number){
    // TODO 玩家使用卡牌逻辑，广播卡牌使用信息，前端根据卡牌使用信息同时演算
  }
  // async playerUseSkill(roomId: number, playerId: number, skillIndex: number){
    // TODO 玩家使用技能逻辑，广播技能使用信息，前端根据技能使用信息同时演算（目前不打算做）
  // }
}
