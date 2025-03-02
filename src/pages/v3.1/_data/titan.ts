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
        Desc: "处于白昼时，我方目标最终伤害提高<color style='color:#f29e38;'> 20% </color>。进入白昼时激活我方全体终结技。",
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
        Desc: "处于白昼时，我方目标攻击每击中1名敌方目标，下回合开始时回复同于生命上限<color style='color:#f29e38;'> 8% </color>的生命值，最多叠加<color style='color:#f29e38;'> 10 </color>次。",
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
        Desc: "本次差分宇宙中，每触发1次该祝福的获得宇宙碎片效果，处于黑夜时，施放攻击后，对攻击目标造成<color style='color:#f29e38;'> 40% </color>攻击力的附加伤害。",
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
        Desc: "黑夜占比增加<color style='color:#f29e38;'> 25% </color>，黑夜中我方目标生命降低后，下一次攻击造成的最终伤害额外提高<color style='color:#f29e38;'> 40% </color>。",
        Extra: [],
      },
      {
        Name: '弑杀，无道暴君',
        Desc: "激活效果后，黑夜中每降低 10% 生命值，使回复量提高<color style='color:#f29e38;'> 1% </color>，造成的最终伤害提高<color style='color:#f29e38;'> 1% </color>，单个昼夜内最多提高<color style='color:#f29e38;'> 40% </color>回复量和<color style='color:#f29e38;'> 40% </color>最终伤害，昼夜切换后重置。",
        Extra: [],
      },
      {
        Name: '弑杀，狂乱神明',
        Desc: "激活效果后，黑夜中我方目标生命上限提高，数值等同于当前生命上限的<color style='color:#f29e38;'> 20% </color>",
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
        Desc: "黑夜占比增加<color style='color:#f29e38;'> 25% </color>，黑夜中我方目标生命上限额外提高<color style='color:#f29e38;'> 50% </color>。",
        Extra: [],
      },
      {
        Name: '枯枝发的新芽',
        Desc: "处于黑夜时，我方目标每累计降低<color style='color:#f29e38;'> 50% </color>生命值，使生命上限提高<color style='color:#f29e38;'> 4% </color>，单个昼夜内最多叠加<color style='color:#f29e38;'> 80% </color>，昼夜切换后重置。",
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
    Img: 'IconRogueTournTitanAvatarPhageina',
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
