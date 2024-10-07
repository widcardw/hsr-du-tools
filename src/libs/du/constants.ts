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
    DotBoom = 29,
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
}

enum Side {
  Self = 1,
  Enemy = 2,
}

const GAIN_MAP: Record<GainType, [Side, string, string]> = {
  [GainType.ATK]: [Side.Self, '攻击力', '/property/IconAttack.webp'],
  [GainType.DEF]: [Side.Self, '防御力', '/property/IconDefence.webp'],
  [GainType.HEAL]: [Side.Self, '生命值', '/property/IconMaxHP.webp'],
  [GainType.SPD]: [Side.Self, '速度', '/property/IconSpeed.webp'],
  [GainType.CRIT]: [Side.Self, '暴击', '/property/IconCriticalChance.webp'],
  [GainType.CRITDMG]: [Side.Self, '暴伤', '/property/IconCriticalDamage.webp'],
  [GainType.DMG_Gain]: [Side.Self, '伤害', '/status/Icon_Sanguine_Gaze.webp'],
  [GainType.RESIST]: [Side.Self, '效果抵抗', '/property/IconStatusResistance.webp'],
  [GainType.BREAK]: [Side.Self, '击破特攻', '/property/IconBreakUp.webp'],
  [GainType.EFFECT_HIT_RATE]: [Side.Self, '效果命中', '/property/IconStatusProbability.webp'],
  [GainType.ENERGY_Charge]: [Side.Self, '充能', '/property/IconEnergyRecovery.webp'],
  [GainType.DMG_RESIST]: [Side.Self, '受到伤害降低', '/status/Icon_DMG_Reduction.webp'],
  [GainType.AdditionalDmg]: [Side.Self, '附加倍率', '/property/IconAttack.webp'],
  [GainType.ResistStrike]: [Side.Self, '抗性穿透', '/status/Icon_Ruan_mei.webp'],
  [GainType.MON_ATK_DEC]: [Side.Enemy, '攻击降低', '/status/Icon_ATK_Down.webp'],
  [GainType.MON_DEF_DEC]: [Side.Enemy, '防御降低', '/status/IconDefenceDecrease.png'],
  [GainType.MON_SPD_DEC]: [Side.Enemy, '速度降低', '/status/IconSpeedDecrease.png'],
  [GainType.MON_RESISTANCE_DEC]: [Side.Enemy, '效果抵抗降低', '/status/IconStatusResistanceDecrease.png'],
  [GainType.MON_DMG_DEC]: [Side.Enemy, '伤害降低', '/status/IconDMGDecrease.png'],
  [GainType.MON_VUL_INC]: [Side.Enemy, '易伤', '/status/Icon_All_DMG_Boost.webp'],
  [GainType.MON_in_NEG_EFFECT]: [Side.Enemy, '负面状态', '/path/IconProfessionWarlockMiddle.webp'],
  [GainType.MON_EFF_HIT_RATE_DEC]: [Side.Enemy, '效果命中降低', '/status/IconStatusProbabilitydecrease.png'],
  [GainType.DissociationDmg]: [Side.Self, '离神', '/path/IconProfessionMemoryMiddle.webp'],
  [GainType.MON_FREEZE_RES_DEC]: [Side.Enemy, '冻结抗性', '/property/IconIceResistanceDelta.webp'],
  [GainType.Freeze]: [Side.Enemy, '冻结', '/status/Icon_Freeze.webp'],
  [GainType.HitFrozenUnit]: [Side.Self, '攻击冻结目标', '/status/Icon_Freeze.webp'],
  [GainType.DoT_By_Char]: [Side.Self, '角色持续伤害', '/status/Icon_Arcana.webp'],
  [GainType.DoT]: [Side.Self, '持续伤害', '/status/Icon_Shock.webp'],
  [GainType.DotBoom]: [Side.Self, '持续伤害结算', '/status/Eidolon_Fortississimo.webp'],
  [GainType.DoT_Vulnerability]: [Side.Self, '持续伤害易伤', '/status/Ability_Shining_Bright.webp'],
  [GainType.Suspicion]: [Side.Self, '怀疑', '/path/IconProfessionWarlockMiddle.webp'],
  [GainType.QuakeDmg]: [Side.Self, '反震', '/path/IconProfessionKnightMiddle.webp'],
  [GainType.Shield]: [Side.Self, '护盾', '/status/Icon_Shield.webp'],
  [GainType.FollowUpAtk]: [Side.Self, '追击', '/status/Ability_Difficulty_Paying.webp'],
  [GainType.NomralAtk]: [Side.Self, '普攻', '/status/Ability_Cherry_on_Top.webp'],
  [GainType.SkillAtk]: [Side.Self, '战技', '/status/Ability_Master_Its_Tea_Time.webp'],
  [GainType.UltimateAtk]: [Side.Self, '终结技', '/status/Ability_Merit_Bestowed_in_My_Garden.webp'],
  [GainType.CounterAtk]: [Side.Self, '反击', '/status/Ability_Because_We_re_Family.webp'],
  [GainType.Aftertaste]: [Side.Self, '回味', '/path/IconProfessionJoyMiddle.webp'],
  [GainType.CriticalBoost]: [Side.Self, '会心', '/status/Icon_DMG_Boost.webp'],
  [GainType.Kill]: [Side.Self, '击杀', '/property/IconAttack.webp'],
  [GainType.SuccessiveAction]: [Side.Self, '连续行动', '/status/Icon_DMG_Boost.webp'],
  [GainType.BreakDmg]: [Side.Self, '击破伤害', '/property/IconBreakUp.webp'],
  [GainType.SuperBreakDmg]: [Side.Self, '超击破伤害', '/status/Icon_Detonated.webp'],
  [GainType.Break]: [Side.Self, '击破目标', '/status/Icon_Safeguard_Broken.webp'],
  [GainType.HitWeak]: [Side.Self, '攻击破弱目标', '/status/Icon_Thanatoplum_Rebloom.webp'],
  [GainType.AddWeakness]: [Side.Enemy, '添加弱点', '/status/Ability_Allow_Changes.webp'],
  [GainType.CutToughness]: [Side.Self, '削韧', '/status/Icon_Safeguard_Broken.webp'],
  [GainType.BreakEfficiency]: [Side.Self, '击破效率', '/status/Icon_Safeguard_Broken.webp'],
  [GainType.MON_act_delay]: [Side.Enemy, '行动延后', '/status/IconSpeedDecrease.png'],
  [GainType.MON_BREAK_VUL]: [Side.Enemy, '击破易伤', '/property/IconBreakUp.webp'],
  [GainType.SporeDmg]: [Side.Self, '孢子伤害', '/path/IconProfessionPropagationMiddle.webp'],
  [GainType.SporeCnt]: [Side.Self, '孢子数量', '/path/IconProfessionPropagationMiddle.webp'],
  [GainType.Point]: [Side.Self, '战技点', '/status/StarBig_WhiteGlow.png'],
  [GainType.DewDropDmg]: [Side.Self, '珠露伤害', '/status/Icon_Draining_Hit.webp'],
  [GainType.DewDropCharge]: [Side.Self, '珠露充能', '/status/Icon_Draining_Hit.webp'],
  [GainType.Healing]: [Side.Self, '治疗量', '/property/IconHealRatio.webp'],
  [GainType.DebuffRemove]: [Side.Self, '负面状态解除', '/status/Trace_Kinship.webp'],
  [GainType.Grit]: [Side.Self, '战意', '/path/IconProfessionWarriorMiddle.webp'],
  [GainType.BeHit]: [Side.Self, '被击', '/path/IconProfessionWarriorMiddle.webp'],
  [GainType.ConsumeHp]: [Side.Self, '消耗生命', '/status/Icon_Prana-Siphoned.png'],
  [GainType.DamageSpread]: [Side.Self, '伤害扩散', '/property/IconAttack.webp'],
  [GainType.Brain_in_a_Vat]: [Side.Self, '罐中脑', '/path/IconProfessionMageMiddle.webp'],
  [GainType.Brain_in_a_Vat_Charge]: [Side.Self, '罐中脑充能', '/path/IconProfessionMageMiddle.webp'],
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
  BlessingExtra,
  GainType,
  GAIN_MAP,
  BLESSING_EXTRA_MAP,
  PATH_MAP,
  PATH_ICON_MAP,
}
