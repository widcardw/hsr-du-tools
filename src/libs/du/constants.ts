// 命途
enum Path {
  Knight = 120,  // 存护
  Memory = 121,  // 记忆
  Warlock = 122,  //虚无
  Pirest = 123,   // 丰饶
  Rogue = 124,  // 巡猎
  Warrior = 125,  // 毁灭
  Joy = 126,   // 欢愉
  Propagation = 127,   // 繁育
  Mage = 128,  // 智识
}

const PATH_MAP: Record<Path, string> = {
  [Path.Knight]: '存护',
  [Path.Memory]: '记忆',
  [Path.Warlock]: '虚无',
  [Path.Pirest]: '丰饶',
  [Path.Rogue]: '巡猎',
  [Path.Warrior]: '毁灭',
  [Path.Joy]: '欢愉',
  [Path.Propagation]: '繁育',
  [Path.Mage]: '智识',
}

const PATH_ICON_MAP: Record<Path, string> = {
  [Path.Knight]: '/IconProfessionKnightMiddle.webp',
  [Path.Memory]: '/IconProfessionMemoryMiddle.webp',
  [Path.Warlock]: '/IconProfessionWarlockMiddle.webp',
  [Path.Pirest]: '/IconProfessionPirestMiddle.webp',
  [Path.Rogue]: '/IconProfessionRogueMiddle.webp',
  [Path.Warrior]: '/IconProfessionWarriorMiddle.webp',
  [Path.Joy]: '/IconProfessionJoyMiddle.webp',
  [Path.Propagation]: '/IconProfessionPropagationMiddle.webp',
  [Path.Mage]: '/IconProfessionMageMiddle.webp',
}

// 命途特殊效果
enum BlessingExtra {
  BasicDmg = 61000500,  // 基础伤害
  Quake = 70000102,  // 反震
  Dissociation = 60000002,  // 离神
  Suspicion = 60000012,  // 怀疑
  Brain_in_a_Vat = 61000044,  // 罐中脑
  Dewdrop = 60000013,   // 珠露
  Grit = 60000005,  // 战意
  CriticalBoost = 60000004,   // 会心
  Spore = 60000017,   // 孢子
  Aftertaste = 60000003,   // 回味
  SuperBreakDmg = 10000015,   // 超击破伤害
  FreeOfSuffer = 61000301,   // 谛苦除灭
  Eclosion = 61000302,   // 羽化
  CentralLink = 61000303,  // 中枢链接
  Quake2 = 60000001,   // 反震
  GroupAttack = 61000045,   // 群攻
}

// 增益类型
enum GainType {
    ATK = 1,
    DEF = 2,
    HEAL = 3,
    SPD = 4,
    CRIT = 5,
    CRITDMG = 6,
    DMG_Gain = 7,
    RESIST = 8,
    BREAK = 9,
    EFFECT_HIT_RATE = 10,
    ENERGY_Charge = 11,
    DMG_RESIST = 12,
    AdditionalDmg = 13,
    ResistStrike = 14,
    MON_ATK_DEC = 15,
    MON_DEF_DEC = 16,
    MON_SPD_DEC = 17,
    MON_RESISTANCE_DEC = 18,
    MON_DMG_DEC = 19,
    MON_VUL_INC = 20,
    MON_in_NEG_EFFECT = 21,
    MON_EFF_HIT_RATE_DEC = 22,
    DissociationDmg = 23,
    MON_FREEZE_RES_DEC = 24,
    Freeze = 25,
    HitFrozenUnit = 26,
    DoT_By_Char = 27,
    DoT = 28,
    DotDetonate = 29,
    DoT_Vulnerability = 30,
    Suspicion = 31,
    QuakeDmg = 32,
    Shield = 33,
    FollowUpAtk = 34,
    NomralAtk = 35,
    SkillAtk = 36,
    UltimateAtk = 37,
    CounterAtk = 38,
    Aftertaste = 39,
    CriticalBoost = 40,
    Kill = 41,
    SuccessiveAction = 42,
    BreakDmg = 43,
    SuperBreakDmg = 44,
    Break = 45,
    HitWeak = 46,
    AddWeakness = 47,
    CutToughness = 48,
    BreakEfficiency = 49,
    MON_act_delay = 50,
    MON_BREAK_VUL = 51,
    SporeDmg = 52,
    SporeCnt = 53,
    Point = 54,
    DewDropDmg = 55,
    DewDropCharge = 56,
    Healing = 57,
    DebuffRemove = 58,
    Grit = 59,
    BeHit = 60,
    ConsumeHp = 61,
    DamageSpread = 62,
    Brain_in_a_Vat = 63,
    Brain_in_a_Vat_Charge = 64,

    Knight = 120,  // 存护
    Memory = 121,  // 记忆
    Warlock = 122,  //虚无
    Pirest = 123,   // 丰饶
    Rogue = 124,  // 巡猎
    Warrior = 125,  // 毁灭
    Joy = 126,   // 欢愉
    Propagation = 127,   // 繁育
    Mage = 128,  // 智识
}

enum Side {
  Self = 1,
  Enemy = 2,
}

const BLESSING_EXTRA_MAP: Record<
  BlessingExtra,
  { name: string; desc: string }
> = {
  61000500: {
    name: '基础伤害',
    desc: '敌方目标等级、阈值协议越高，造成的基础伤害越高。',
  },
  70000102: {
    name: '反震',
    desc: '关卡增益造成的附加伤害，若在受到攻击时触发，则无法消灭敌方目标。',
  },
  60000002: {
    name: '离神',
    desc: '由特定「记忆」命途祝福施加的负面效果。<br>被视为冻结状态，一定回合内无法行动，该状态解除时会造成等同于敌方目标生命上限 30.0% 的冰属性附加伤害。',
  },
  60000012: {
    name: '怀疑',
    desc: '由特定「虚无」命途祝福施加的负面效果。<br>每层使受到的持续伤害提高 1.0% ，该效果最多叠加 99.0 层，在回合结束时失去 2.0 层。',
  },
  61000044: {
    name: '罐中脑',
    desc: '若【罐中脑】的启迪充能比例达到 100% ，角色使用【罐中脑】以外的方式施放终结技后，会再次激活终结技，通过该方式施放终结技会消耗 100% 的启迪充能。',
  },
  60000013: {
    name: '珠露',
    desc: '由特定「丰饶」命途祝福形成的充能效果。<br>充能值不超过角色生命上限的 500.0% 。施放攻击后破裂，基于充能值对攻击的敌方目标造成附加伤害。',
  },
  60000005: {
    name: '战意',
    desc: '由特定「毁灭」命途祝福施加的增益效果。<br>每层使攻击力提高 3.0% ，防御力提高 3.0% ，该效果最多叠加 35.0 层。',
  },
  60000004: {
    name: '会心',
    desc: '由特定「巡猎」命途祝福施加的增益效果。<br>每层使暴击率提高 6.0% ，暴击伤害提高 12.0% ，该效果最多叠加 8.0 层，可以传递给下一个回合开始的我方目标。当任意我方目标受到攻击后层数清零。',
  },
  60000017: {
    name: '孢子',
    desc: '当持有数量大于等于 3.0 个时，会在受到角色攻击时爆裂，对持有目标造成不受加成影响的风属性附加伤害。爆裂后会传播给随机相邻目标，且无法二次传播，每个敌方目标最多持有 6.0 个。',
  },
  60000003: {
    name: '回味',
    desc: '由特定「欢愉」命途祝福造成的随机属性追加攻击伤害。',
  },
  10000015: {
    name: '超击破伤害',
    desc: '击破特攻、本次攻击削韧值、角色等级越高，造成的超击破伤害越高。<br>超击破伤害无法暴击，不受伤害提高类效果所影响。<br>超击破伤害也属于击破伤害。',
  },
  61000301: {
    name: '谛苦除灭',
    desc: '生命上限提高 75.0% ，造成的伤害提高 150.0% ，免疫负面效果。',
  },
  61000302: {
    name: '羽化',
    desc: '施放普攻、战技发动攻击时，无视目标 30.0% 的全属性抗性，并在攻击后对攻击目标造成等同于角色攻击力 400.0% 的附加伤害，只对最新目标生效。',
  },
  61000303: {
    name: '中枢链接',
    desc: '受到角色攻击后，使自身及血量上限最高的敌方目标受到1次等同于攻击者 120.0% 攻击力的终结技伤害，敌方全体触发 40.0 次效果后被移除。',
  },
  60000001: {
    name: '反震',
    desc: '由特定「存护」命途祝福造成的附加伤害。',
  },
  61000045: {
    name: '群攻',
    desc: '技能标签的一种，以群体攻击为主要效果的技能会拥有该标签。',
  },
}

export {
  Path,
  Side,
  BlessingExtra,
  GainType,
  BLESSING_EXTRA_MAP,
  PATH_MAP,
  PATH_ICON_MAP,
}
