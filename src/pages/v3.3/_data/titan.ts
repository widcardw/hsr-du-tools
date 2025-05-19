interface TitanBlessing {
  Name: string
  Desc: string
  Extra: Array<number>
}

interface _TitanType {
  _id: number
  /** 称呼 */
  Titan: string
  /** 对应任务头像 */
  Avatar: string
  /** 图像路径 */
  Img: string
  Blessings: Array<TitanBlessing>
}

interface TitanType {
  _id: number
  /** 称呼 */
  Titan: string
  /** 对应任务头像 */
  Avatar: string
  /** 图像路径 */
  Img: string
  Blessings: Array<{ level: string; titan: TitanBlessing[] }>
}

const TITAN: _TitanType[] = [
  {
    _id: 121,
    Titan: '「万径之门」',
    Avatar: '缇宝',
    Img: 'IconRogueTournTitanAvatarlanos.png',
    Blessings: [
      {
        Name: '万径相连',
        Desc: "处于白昼时，我方目标最终伤害提高<color style='color:#f29e38;'> 25% </color>。进入白昼时激活我方全体终结技。",
        Extra: [],
      },
      {
        Name: '童话，关于黎明',
        Desc: "白昼占比增加<color style='color:#f29e38;'> 25% </color>，白昼时我方目标最终伤害额外提高<color style='color:#f29e38;'> 20% </color>。",
        Extra: [],
      },
      {
        Name: '童话，关于往昔',
        Desc: "处于白昼时，我方目标消灭敌方目标后，恢复等同于能量上限<color style='color:#f29e38;'> 50% </color>的能量。",
        Extra: [],
      },
      {
        Name: '童话，关于我们',
        Desc: '本祝颂及其强化效果在夜晚也生效且不重置。当永夜后，黑夜降临时，激活我方全体终结技。',
        Extra: [],
      },
      {
        Name: '预言，带来纷争',
        Desc: "白昼占比增加<color style='color:#f29e38;'> 25% </color>，白昼时我方目标最终伤害额外提高<color style='color:#f29e38;'> 25% </color>。",
        Extra: [],
      },
      {
        Name: '预言，留下希望',
        Desc: "处于白昼时，我方目标攻击每击中1名敌方目标，下回合开始时回复同于生命上限<color style='color:#f29e38;'> 6% </color>的生命值，最多叠加<color style='color:#f29e38;'> 10 </color>次。",
        Extra: [],
      },
      {
        Name: '预言，再续神话',
        Desc: "处于白昼时，我方目标每次施放终结技时，造成的最终伤害提高<color style='color:#f29e38;'> 4% </color>，单个昼夜内最多叠加<color style='color:#f29e38;'> 60% </color>，昼夜切换后重置。",
        Extra: [],
      },
    ],
  },
  {
    _id: 123,
    Titan: '「翻飞之币」',
    Avatar: '赛飞儿',
    Img: 'IconRogueTournTitanAvatarZagreus.png',
    Blessings: [
      {
        Name: '捷足飞贼',
        Desc: "战斗中消灭精英敌人可以获得额外<color style='color:#f29e38;'> 50 </color>宇宙碎片，该效果每场战斗最多触发1次。处于黑夜时，对精英敌人的最终伤害提高<color style='color:#f29e38;'> 30% </color>，受到精英敌人的伤害降低<color style='color:#f29e38;'> 10% </color>。",
        Extra: [],
      },
      {
        Name: '扯谎不眨眼',
        Desc: "黑夜占比增加<color style='color:#f29e38;'> 25% </color>。处于黑夜时，消灭精英敌人获得的额外宇宙碎片提高<color style='color:#f29e38;'> 35 </color>。首个昼夜切换后该效果失效。",
        Extra: [],
      },
      {
        Name: '行骗不露怯',
        Desc: "进入战斗时，若有超过<color style='color:#f29e38;'> 500 </color>宇宙碎片，黑夜时我方目标对精英敌人的最终伤害额外提高<color style='color:#f29e38;'> 80% </color>。",
        Extra: [],
      },
      {
        Name: '诈窃不留痕',
        Desc: "基础效果中，消灭精英敌人获得额外宇宙碎片的次数提高<color style='color:#f29e38;'> 2 </color>次。",
        Extra: [],
      },
      {
        Name: '长夜利好偷儿',
        Desc: "黑夜占比增加<color style='color:#f29e38;'> 25% </color>，黑夜时我方目标对精英敌人的最终伤害额外提高<color style='color:#f29e38;'> 40% </color>。",
        Extra: [],
      },
      {
        Name: '宝库难防家贼',
        Desc: "基础效果中，击杀精英获得的宇宙碎片提高<color style='color:#f29e38;'> 100 </color>。",
        Extra: [],
      },
      {
        Name: '谎言亦需雕琢',
        Desc: "本次差分宇宙中，每触发1次该祝颂的获得宇宙碎片效果，处于黑夜时，施放攻击后，对攻击目标造成<color style='color:#f29e38;'> 40% </color>攻击力的附加伤害。",
        Extra: [],
      },
    ],
  },
  {
    _id: 124,
    Titan: '「天谴之矛」',
    Avatar: '万敌',
    Img: 'IconRogueTournTitanAvatarNikadory.png',
    Blessings: [
      {
        Name: '沐血而冠',
        Desc: "处于黑夜时，单名我方目标累计生命值降低<color style='color:#f29e38;'> 50% </color>后激活效果：我方全体回合结束时回复等同于自身生命上限<color style='color:#f29e38;'> 20% </color>的生命值，黑夜中最终伤害提高<color style='color:#f29e38;'> 25% </color>，昼夜切换后重置。",
        Extra: [],
      },
      {
        Name: '矛为神怒',
        Desc: '本祝颂及其强化效果在白昼也生效且不重置。',
        Extra: [],
      },
      {
        Name: '剑为人怨',
        Desc: "激活效果所需降低的生命值比例提高<color style='color:#f29e38;'> 40% </color>，激活效果后，我方目标在黑夜时造成的最终伤害额外提高<color style='color:#f29e38;'> 30% </color>。",
        Extra: [],
      },
      {
        Name: '盾为凯旋',
        Desc: "激活效果所需降低的生命值比例降低<color style='color:#f29e38;'> 25% </color>，激活效果时，全队回复等同于自身生命上限<color style='color:#f29e38;'> 100% </color>的生命值，且下<color style='color:#f29e38;'> 5 </color>次攻击额外回复等同于自身生命上限<color style='color:#f29e38;'> 30% </color>的生命值。",
        Extra: [],
      },
      {
        Name: '弑杀，万千仇敌',
        Desc: "黑夜占比增加<color style='color:#f29e38;'> 25% </color>，激活效果后，我方目标在黑夜时造成的最终伤害额外提高<color style='color:#f29e38;'> 40% </color>。",
        Extra: [],
      },
      {
        Name: '弑杀，无道暴君',
        Desc: "激活效果后，黑夜中每降低 10% 生命值，使回复量提高<color style='color:#f29e38;'> 1% </color>，造成的最终伤害提高<color style='color:#f29e38;'> 1% </color>，单个昼夜内最多提高<color style='color:#f29e38;'> 40% </color>回复量和<color style='color:#f29e38;'> 40% </color>最终伤害，昼夜切换后重置。",
        Extra: [],
      },
      {
        Name: '弑杀，狂乱神明',
        Desc: "激活效果后，黑夜中我方目标生命上限提高，数值等同于当前生命上限的<color style='color:#f29e38;'> 16% </color>",
        Extra: [],
      },
    ],
  },
  {
    _id: 125,
    Titan: '「灰黯之手」',
    Avatar: '遐蝶',
    Img: 'IconRogueTournTitanAvatarXenatos.png',
    Blessings: [
      {
        Name: '与死合掌',
        Desc: "处于黑夜时，我方目标生命上限提高<color style='color:#f29e38;'> 30% </color>。生命降低后下一次攻击造成的最终伤害提高<color style='color:#f29e38;'> 50% </color>。",
        Extra: [],
      },
      {
        Name: '终凋零的',
        Desc: "黑夜占比增加<color style='color:#f29e38;'> 25% </color>，我方目标生命降低后的最终伤害提高额外提高<color style='color:#f29e38;'> 40% </color>。",
        Extra: [],
      },
      {
        Name: '终枯萎的',
        Desc: '本祝颂及其强化效果在白昼也生效且不重置。',
        Extra: [],
      },
      {
        Name: '终逝去的',
        Desc: '处于黑夜时，我方目标回复的非溢出生命值，在本祝颂及其强化效果内也被视为生命降低。',
        Extra: [],
      },
      {
        Name: '荒冢前的繁花',
        Desc: "黑夜占比增加<color style='color:#f29e38;'> 25% </color>，黑夜中我方目标生命上限额外提高<color style='color:#f29e38;'> 45% </color>。",
        Extra: [],
      },
      {
        Name: '枯枝发的新芽',
        Desc: "处于黑夜时，我方目标每累计降低<color style='color:#f29e38;'> 50% </color>生命值，使生命上限提高<color style='color:#f29e38;'> 5% </color>，单个昼夜内最多叠加<color style='color:#f29e38;'> 65% </color>，昼夜切换后重置。",
        Extra: [],
      },
      {
        Name: '归途上的蝴蝶',
        Desc: "我方目标每次生命值降低后，使造成的最终伤害提高<color style='color:#f29e38;'> 2% </color>，单次行动内最多触发1次，单个昼夜内最多叠加<color style='color:#f29e38;'> 60% </color>，昼夜切换后重置。",
        Extra: [],
      },
    ],
  },
  {
    _id: 120,
    Titan: '「黄金之茧」',
    Avatar: '阿格莱雅',
    Img: 'IconRogueTournTitanAvatarMoneta.png',
    Blessings: [
      {
        Name: '金织如梦',
        Desc: "处于白昼时，我方全体目标累计攻击<color style='color:#f29e38;'> 8 </color>次后激活效果：白昼中速度提高<color style='color:#f29e38;'> 40% </color>，昼夜切换后重置。",
        Extra: [],
      },
      {
        Name: '无缺的华服',
        Desc: '本祝颂及其强化效果在夜晚也生效且不重置。',
        Extra: [],
      },
      {
        Name: '轮舞的华服',
        Desc: "激活效果所需的攻击次数减少<color style='color:#f29e38;'> 6 </color>次，激活时我方全体目标行动提前 100% 。",
        Extra: [],
      },
      {
        Name: '染血的华服',
        Desc: "激活效果所需的攻击次数增加<color style='color:#f29e38;'> 8 </color>次，激活后速度额外提高<color style='color:#f29e38;'> 50% </color>。",
        Extra: [],
      },
      {
        Name: '纺织浪漫之丝',
        Desc: "白昼占比增加<color style='color:#f29e38;'> 25% </color>，激活效果后我方目标在白昼时速度额外提高<color style='color:#f29e38;'> 30% </color>。",
        Extra: [],
      },
      {
        Name: '纺织美丽之丝',
        Desc: "激活效果后，白昼时我方目标每次施放攻击后使自身速度额外提高<color style='color:#f29e38;'> 2% </color>，单个昼夜内最多叠加<color style='color:#f29e38;'> 60% </color>，昼夜切换后重置。",
        Extra: [],
      },
      {
        Name: '纺织命运之丝',
        Desc: "激活效果后，白昼时每有 100 点速度，使自身造成的最终伤害提高<color style='color:#f29e38;'> 20% </color>。",
        Extra: [],
      },
    ],
  },
  {
    _id: 122,
    Titan: '「满溢之杯」',
    Avatar: '海瑟音',
    Img: 'IconRogueTournTitanAvatarPhageina.png',
    Blessings: [
      {
        Name: '无休欢宴',
        Desc: "处于白昼时，敌方目标受到的最终伤害提高<color style='color:#f29e38;'> 25% </color>，敌方目标陷入【绝唱】：每回合开始时，受到<color style='color:#f29e38;'> 400% </color><u class='infou'>基础伤害</u>的物理属性附加伤害。",
        Extra: [61000500],
      },
      {
        Name: '永续的狂欢',
        Desc: "白昼占比增加<color style='color:#f29e38;'> 25% </color>，白昼时敌方目标受到的最终伤害提高<color style='color:#f29e38;'> 20% </color>。",
        Extra: [],
      },
      {
        Name: '不醒的酣眠',
        Desc: "处于白昼时，敌方目标受到我方目标攻击后，按<color style='color:#f29e38;'> 100% </color>的比例触发1次【绝唱】的伤害。",
        Extra: [],
      },
      {
        Name: '流转的诗篇',
        Desc: "【绝唱】视为【裂伤】，【绝唱】的伤害倍率提高原倍率的<color style='color:#f29e38;'> 100% </color>, 每回合开始时造成持续伤害。",
        Extra: [],
      },
      {
        Name: '沉醉者的挽歌',
        Desc: "白昼占比增加<color style='color:#f29e38;'> 25% </color>，白昼时我方目标造成的最终伤害提高<color style='color:#f29e38;'> 25% </color>。",
        Extra: [],
      },
      {
        Name: '离愁者的挽歌',
        Desc: "处于白昼时，【绝唱】每次造成伤害，其伤害都会提高原倍率的<color style='color:#f29e38;'> 5% </color>，单个昼夜内最多叠加<color style='color:#f29e38;'> 200% </color>，昼夜切换后重置。",
        Extra: [],
      },
      {
        Name: '无归者的挽歌',
        Desc: "每次受到其他持续伤害时，按<color style='color:#f29e38;'> 50% </color>的比例触发1次【绝唱】伤害，每次行动最多触发<color style='color:#f29e38;'> 4 </color>次。",
        Extra: [],
      },
    ],
  },
  {
    _id: 126,
    Titan: '「晨昏之眼」',
    Avatar: '风堇',
    Img: 'IconRogueTournTitanAvatarAigle.png',
    Blessings: [
      {
        Name: '虹的轻语',
        Desc: "处于白昼时，我方目标每回复自身等级<color style='color:#f29e38;'> 60 </color>倍的生命值后，自身在白昼时造成的最终伤害提高<color style='color:#f29e38;'> 5% </color>，可叠加，单个昼夜内最多叠加<color style='color:#f29e38;'> 20% </color>。",
        Extra: [],
      },
      {
        Name: '雨啊，润泽万物',
        Desc: "白昼与黑夜切换间隔缩短<color style='color:#f29e38;'> 25% </color>，最多缩短<color style='color:#f29e38;'> 50% </color>。进入白昼时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 20% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '风啊，轻抚林木',
        Desc: "基础效果中，所需回复的生命值降低至自身等级的<color style='color:#f29e38;'> 30 </color>倍，每次触发基础效果成功提高最终伤害后，生命上限提高<color style='color:#f29e38;'> 3% </color>。",
        Extra: [],
      },
      {
        Name: '光啊，照耀净土',
        Desc: '本祝颂及其强化效果在夜晚与进入夜晚时也生效，且可继续叠加并重置叠加上限。',
        Extra: [],
      },
      {
        Name: '雷霆，刺穿苍穹',
        Desc: "白昼占比增加<color style='color:#f29e38;'> 25% </color>。处于白昼时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 25% </color>。",
        Extra: [],
      },
      {
        Name: '彩虹，连接彼端',
        Desc: "基础效果中，每个白昼的最终伤害提高上限变为<color style='color:#f29e38;'> 35% </color>。",
        Extra: [],
      },
      {
        Name: '天空，注视众生',
        Desc: "进入白昼时，我方目标下一次施放攻击后，对攻击目标造成等同于生命上限<color style='color:#f29e38;'> 1000% </color>的附加伤害。",
        Extra: [],
      },
    ],
  },
  {
    _id: 127,
    Titan: '「裂分之枝」',
    Avatar: '那刻夏',
    Img: 'IconRogueTournTitanAvatarCerces.png',
    Blessings: [
      {
        Name: '诸因解明',
        Desc: "立即获得1个可损毁奇物。每当奇物损毁或被丢弃时，立即获得<color style='color:#f29e38;'> 35 </color>宇宙碎片，每个区域最多生效<color style='color:#f29e38;'> 5 </color>次。进入白昼时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 25% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '因与果之术',
        Desc: "白昼与黑夜切换间隔缩短<color style='color:#f29e38;'> 25% </color>，最多缩短<color style='color:#f29e38;'> 50% </color>。进入白昼时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 25% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '魂与肉之术',
        Desc: "奇物损毁或丢弃时获得的宇宙碎片变为<color style='color:#f29e38;'> 45 </color>。进入【首领】区域时，修复1个随机已损毁1-3星奇物。",
        Extra: [],
      },
      {
        Name: '智与狂之术',
        Desc: "立即舍弃<color style='color:#f29e38;'> 5 </color>个负面奇物。若持有的负面奇物数量小于等于<color style='color:#f29e38;'> 1 </color>个，基础效果中，我方目标造成的最终伤害额外提高<color style='color:#f29e38;'> 60% </color>。",
        Extra: [],
      },
      {
        Name: '乃通达至理',
        Desc: "白昼与黑夜切换间隔缩短<color style='color:#f29e38;'> 25% </color>，最多缩短<color style='color:#f29e38;'> 50% </color>。进入白昼时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 30% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '乃明晰自我',
        Desc: "本次模拟宇宙中，每通过该金血祝颂获得<color style='color:#f29e38;'> 100 </color>宇宙碎片，基础效果中，我方目标造成的最终伤害额外提高<color style='color:#f29e38;'> 12% </color>。",
        Extra: [],
      },
      {
        Name: '乃解体诸神',
        Desc: "累计损毁或丢弃<color style='color:#f29e38;'> 3 </color>个奇物后，立即获得1个随机1-2星可损毁奇物。每个区域只能触发<color style='color:#f29e38;'> 1 </color>次。",
        Extra: [],
      },
    ],
  },
  {
    _id: 128,
    Titan: '「全世之座」',
    Avatar: '白厄',
    Img: 'IconRogueTournTitanAvatarKephale.png',
    Blessings: [
      {
        Name: '负世之剑',
        Desc: "进入白昼时，编队中的第一位角色获得【黎明】，持续<color style='color:#f29e38;'> 2 </color>回合。持有【黎明】的角色，造成的最终伤害提高<color style='color:#f29e38;'> 100% </color>。",
        Extra: [],
      },
      {
        Name: '无罪者的启程',
        Desc: "白昼与黑夜切换间隔缩短<color style='color:#f29e38;'> 25% </color>，最多缩短<color style='color:#f29e38;'> 50% </color>。进入白昼时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 25% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '失却者的苦难',
        Desc: "【黎明】提供的最终伤害提高变为<color style='color:#f29e38;'> 80% </color>，不再有持续回合限制，昼夜切换后失效。",
        Extra: [],
      },
      {
        Name: '寻道者的召唤',
        Desc: "持有【黎明】的角色，造成的暴击伤害提高<color style='color:#f29e38;'> 160% </color>。",
        Extra: [],
      },
      {
        Name: '负世者的试炼',
        Desc: "白昼与黑夜切换间隔缩短<color style='color:#f29e38;'> 25% </color>，最多缩短<color style='color:#f29e38;'> 50% </color>。进入白昼时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 30% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '负世者的跨越',
        Desc: '本祝颂及其强化效果在夜晚与进入夜晚时也生效且不重置。',
        Extra: [],
      },
      {
        Name: '负世者的归返',
        Desc: "每次进入白昼时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 16% </color>，可叠加。",
        Extra: [],
      },
    ],
  },
  {
    _id: 130,
    Titan: '「公正之秤」',
    Avatar: '刻律德菈',
    Img: 'IconRogueTournTitanAvatarTalentum.png',
    Blessings: [
      {
        Name: '于火执棋',
        Desc: "进入黑夜时，编队中的第一位角色获得<color style='color:#f29e38;'> 2 </color>层【征服】。持有【征服】的角色在回合结束时消耗1层【征服】，使自身行动提前 100% ，造成的最终伤害提高<color style='color:#f29e38;'> 10% </color>，持续至自身下一回合结束。",
        Extra: [],
      },
      {
        Name: '攻城的「兵」',
        Desc: "白昼与黑夜切换间隔缩短<color style='color:#f29e38;'> 25% </color>，最多缩短<color style='color:#f29e38;'> 50% </color>。进入黑夜时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 25% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '倒戈的「象」',
        Desc: "消耗【征服】后速度提高<color style='color:#f29e38;'> 60% </color>，昼夜切换后失效。",
        Extra: [],
      },
      {
        Name: '横行的「马」',
        Desc: "进入黑夜时，恢复5点战技点，编队中的第一位角色额外获得<color style='color:#f29e38;'> 1 </color>层【征服】。",
        Extra: [],
      },
      {
        Name: '斩碎旧律的「王」',
        Desc: "白昼与黑夜切换间隔缩短<color style='color:#f29e38;'> 25% </color>，最多缩短<color style='color:#f29e38;'> 50% </color>。进入黑夜时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 30% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '衡量此世的「王」',
        Desc: '本祝颂及其强化效果在白昼与进入白昼时也生效且不重置。',
        Extra: [],
      },
      {
        Name: '火中戴冠的「王」',
        Desc: "处于黑夜时，编队中的第一位角色每次行动使自身造成的最终伤害提高<color style='color:#f29e38;'> 5% </color>，单个昼夜内最多叠加<color style='color:#f29e38;'> 80% </color>，昼夜切换后重置。",
        Extra: [],
      },
    ],
  },
  {
    _id: 129,
    Titan: '「永夜之帷」',
    Avatar: '█ █ █',
    Img: 'IconRogueTournTitanAvatarOlonyx.png',
    Blessings: [
      {
        Name: '长夜有梦',
        Desc: "处于黑夜时，场上每有1名我方目标，造成的最终伤害提高<color style='color:#f29e38;'> 5% </color>，最多不超过<color style='color:#f29e38;'> 40% </color>。",
        Extra: [],
      },
      {
        Name: '晨星已缄默',
        Desc: "黑夜占比增加<color style='color:#f29e38;'> 25% </color>。处于黑夜时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 20% </color>。",
        Extra: [],
      },
      {
        Name: '晚风正驻足',
        Desc: "进入黑夜时，场上每有1名我方目标，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 8% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '夜帷仍啜泣',
        Desc: "处于黑夜时，我方目标施放攻击后，额外造成等同于我方全体目标生命上限之和<color style='color:#f29e38;'> 18% </color>的附加伤害。",
        Extra: [],
      },
      {
        Name: '探访未来之梦',
        Desc: "白昼与黑夜切换间隔缩短<color style='color:#f29e38;'> 25% </color>，最多缩短<color style='color:#f29e38;'> 50% </color>。进入黑夜时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 30% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '探访过去之梦',
        Desc: '本祝颂及其强化效果在白昼与进入白昼时也生效且不重置。',
        Extra: [],
      },
      {
        Name: '探访救赎之梦',
        Desc: "处于黑夜时，我方目标离场/消失/陷入无法战斗状态时，所有我方目标造成的最终伤害提高<color style='color:#f29e38;'> 15% </color>，单个昼夜内最多叠加<color style='color:#f29e38;'> 60% </color>，昼夜切换后重置。",
        Extra: [],
      },
    ],
  },
  {
    _id: 131,
    Titan: '「磐岩之脊」',
    Avatar: '荒笛',
    Img: 'IconRogueTournTitanAvatarGeoria.png',
    Blessings: [
      {
        Name: '连山掣地',
        Desc: "进入黑夜时，我方全体目标获得等同于生命上限<color style='color:#f29e38;'> 75% </color>的护盾并获得【岩晶】。持有【岩晶】的我方目标，造成的最终伤害提高<color style='color:#f29e38;'> 50% </color>。当我方目标未持有护盾或进入白昼时，移除其身上的【岩晶】。",
        Extra: [],
      },
      {
        Name: '啃噬磐岩之牙',
        Desc: "白昼与黑夜切换间隔缩短<color style='color:#f29e38;'> 25% </color>，最多缩短<color style='color:#f29e38;'> 50% </color>。进入黑夜时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 25% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '点燃星火之息',
        Desc: "处于黑夜时，我方目标每经过<color style='color:#f29e38;'> 2 </color>回合，获得等同于生命上限<color style='color:#f29e38;'> 100% </color>的护盾，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '洞察亘古之瞳',
        Desc: "处于黑夜时，我方目标每次获得护盾时，黑夜中造成的最终伤害提高<color style='color:#f29e38;'> 3% </color>，单个昼夜内最多叠加<color style='color:#f29e38;'> 24% </color>。",
        Extra: [],
      },
      {
        Name: '奔袭尘世之踵',
        Desc: "白昼与黑夜切换间隔缩短<color style='color:#f29e38;'> 25% </color>，最多缩短<color style='color:#f29e38;'> 50% </color>。进入黑夜时，我方目标造成的最终伤害提高<color style='color:#f29e38;'> 30% </color>，持续<color style='color:#f29e38;'> 2 </color>回合。",
        Extra: [],
      },
      {
        Name: '撕裂群山之爪',
        Desc: '本祝颂及其强化效果在白昼与进入白昼时也生效，且可继续叠加并重置叠加上限。',
        Extra: [],
      },
      {
        Name: '填补大地之心',
        Desc: "持有【岩晶】的我方目标造成的最终伤害额外提高<color style='color:#f29e38;'> 50% </color>。",
        Extra: [],
      },
    ],
  },
]

const levelIndexSlices = [
  [0, 1],
  [1, 4],
  [4, 7],
]

const levelSplitTitan: TitanType[] = []

for (const titan of TITAN) {
  const obj: TitanType = { ...titan, Blessings: [] }
  for (const i in levelIndexSlices) {
    const s = levelIndexSlices[i]
    let level = ''
    switch (Number(i)) {
      case 0:
        level = '基本效果'
        break
      case 1:
        level = '中阶效果'
        break
      case 2:
        level = '高阶效果'
        break
    }
    obj.Blessings.push({ level, titan: titan.Blessings.slice(s[0], s[1]) })
  }
  levelSplitTitan.push(obj)
}

export {
  levelSplitTitan as TITAN,
  type TitanBlessing,
  type _TitanType,
  type TitanType,
}
