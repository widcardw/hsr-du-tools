import { Side, type GainMapType } from '@/libs/du/constants'

// biome-ignore lint/style/useEnumInitializers: <explanation>
enum GainType {
  /** 攻击 */
  ATK,
  /** 防御 */
  DEF,
  /** 生命 */
  HEAL,
  /** 速度 */
  SPD,
  /** 暴击率 */
  CRIT,
  /** 暴伤 */
  CRITDMG,
  /** 增伤 */
  DMG_Gain,
  /** 效果抵抗 */
  RESIST,
  /** 击破特攻 */
  BREAK,
  /** 效果命中 */
  EFFECT_HIT_RATE,
  /** 充能 */
  ENERGY_Charge,
  /** 减伤 受到伤害降低 */
  DMG_RESIST,
  /** 附伤 */
  AdditionalDmg,
  /** 抗性穿透 */
  ResistStrike,
  /** 敌方攻击降低 */
  MON_ATK_DEC,
  /** 敌方防御降低 */
  MON_DEF_DEC,
  /** 敌方速度降低 */
  MON_SPD_DEC,
  /** 敌方效果抵抗降低 */
  MON_RESISTANCE_DEC,
  /** 敌方伤害降低 */
  MON_DMG_DEC,
  /** 敌方易伤 */
  MON_VUL_INC,
  /** 敌方陷入负面状态 */
  MON_in_NEG_EFFECT,
  /** 敌方效果命中降低 */
  MON_EFF_HIT_RATE_DEC,
  /** 敌方冻结抵抗降低 */
  MON_FREEZE_RES_DEC,
  /** 护盾 */
  Shield,
  /** 角色持续伤害 */
  DoT_By_Char,
  /** 持续伤害 */
  DoT,
  /** 持续伤害结算 */
  DotDetonate,
  /** 持续伤害易伤 */
  DoT_Vulnerability,
  /** 追加攻击 */
  FollowUpAtk,
  /** 普攻 */
  NomralAtk,
  /** 战技 */
  SkillAtk,
  /** 终结技 */
  UltimateAtk,
  /** 反击 */
  CounterAtk,
  /** 回味 */
  Aftertaste,
  /** 会心 */
  CriticalBoost,
  /** 击杀 */
  Kill,
  /** 连续行动 */
  SuccessiveAction,
  /** 击破伤害 */
  BreakDmg,
  /** 超击破伤害 */
  SuperBreakDmg,
  /** 击破目标 */
  MakeBreak,
  /** 攻击破弱目标 */
  HitWeak,
  /** 削韧 */
  CutToughness,
  /** 击破效率 */
  BreakEfficiency,
  /** 敌人行动延后 */
  MON_act_delay,
  /** 击破易伤 */
  MON_Break_VUL,
  /** 战技点 */
  Point,
  /** 治疗量 */
  Healing,
  /** 负面状态解除 */
  DebuffRemove,
  /** 受到攻击 */
  BeHit,
  /** 消耗生命 */
  ConsumeHp,
  /** 伤害扩散 */
  DamageSpread,
  /** 冻结 */
  Freeze,
  /** 罐中脑 */
  Brain_in_a_Vat,
  /** 罐中脑充能 */
  Brain_in_a_Vat_Charge,
  /** 忆灵攻击 */
  MemElfAtk,
  /** 执念 */
  Rememberance,
  /** 呢喃 */
  Nihility,
  /** 呢喃充能 */
  NihilityCharge,
  /** 耀变 */
  Destruction,
  /** 耀变充能 */
  DestructionCharge,
  /** 魂茧 */
  PropagationBless,
  /** 魂茧充能 */
  PropagationBlessCharge,
  /** 和音 */
  Harmony,

  /** 记忆 */
  Memory = 121, //
  /** 虚无 */
  Warlock = 122, //
  /** 巡猎 */
  Rogue = 124, //
  /** 毁灭 */
  Warrior = 125, //
  /** 欢愉 */
  Joy = 126, //
  /** 繁育 */
  Propagation = 127, //
  /** 智识 */
  Mage = 128, //
  /** 同谐 */
  Shaman = 129, //
}

const GAIN_MAP: GainMapType<GainType> = {
  [GainType.ATK]: [Side.Self, '攻击力', '/property/IconAttack.webp'],
  [GainType.DEF]: [Side.Self, '防御力', '/property/IconDefence.webp'],
  [GainType.HEAL]: [Side.Self, '生命值', '/property/IconMaxHP.webp'],
  [GainType.SPD]: [Side.Self, '速度', '/property/IconSpeed.webp'],
  [GainType.CRIT]: [Side.Self, '暴击', '/property/IconCriticalChance.webp'],
  [GainType.CRITDMG]: [Side.Self, '暴伤', '/property/IconCriticalDamage.webp'],
  [GainType.DMG_Gain]: [Side.Self, '伤害', '/status/Icon_Sanguine_Gaze.webp'],
  [GainType.RESIST]: [
    Side.Self,
    '效果抵抗',
    '/property/IconStatusResistance.webp',
  ],
  [GainType.BREAK]: [Side.Self, '击破特攻', '/property/IconBreakUp.webp'],
  [GainType.EFFECT_HIT_RATE]: [
    Side.Self,
    '效果命中',
    '/property/IconStatusProbability.webp',
  ],
  [GainType.ENERGY_Charge]: [
    Side.Self,
    '充能',
    '/property/IconEnergyRecovery.webp',
  ],
  [GainType.DMG_RESIST]: [
    Side.Self,
    '受到伤害降低',
    '/status/Icon_DMG_Reduction.webp',
  ],
  [GainType.AdditionalDmg]: [
    Side.Self,
    '附加倍率',
    '/property/IconAttack.webp',
  ],
  [GainType.ResistStrike]: [
    Side.Self,
    '抗性穿透',
    '/status/Icon_Ruan_mei.webp',
  ],
  [GainType.MON_ATK_DEC]: [
    Side.Enemy,
    '攻击降低',
    '/status/Icon_ATK_Down.webp',
  ],
  [GainType.MON_DEF_DEC]: [
    Side.Enemy,
    '防御降低',
    '/status/IconDefenceDecrease.png',
  ],
  [GainType.MON_SPD_DEC]: [
    Side.Enemy,
    '速度降低',
    '/status/IconSpeedDecrease.png',
  ],
  [GainType.MON_RESISTANCE_DEC]: [
    Side.Enemy,
    '效果抵抗降低',
    '/status/IconStatusResistanceDecrease.png',
  ],
  [GainType.MON_DMG_DEC]: [
    Side.Enemy,
    '伤害降低',
    '/status/IconDMGDecrease.png',
  ],
  [GainType.MON_VUL_INC]: [
    Side.Enemy,
    '易伤',
    '/status/Icon_All_DMG_Boost.webp',
  ],
  [GainType.MON_in_NEG_EFFECT]: [
    Side.Enemy,
    '负面状态',
    '/path/IconProfessionWarlockMiddle.webp',
  ],
  [GainType.MON_EFF_HIT_RATE_DEC]: [
    Side.Enemy,
    '效果命中降低',
    '/status/IconStatusProbabilitydecrease.png',
  ],
  [GainType.MON_FREEZE_RES_DEC]: [
    Side.Enemy,
    '冻结抗性',
    '/property/IconIceResistanceDelta.webp',
  ],
  [GainType.Shield]: [Side.Self, '护盾', '/status/Icon_Shield.webp'],
  [GainType.DoT_By_Char]: [
    Side.Self,
    '角色持续伤害',
    '/status/Icon_Arcana.webp',
  ],
  [GainType.DoT]: [Side.Self, '持续伤害', '/status/Icon_Shock.webp'],
  [GainType.DotDetonate]: [
    Side.Self,
    '持续伤害结算',
    '/status/Eidolon_Fortississimo.webp',
  ],
  [GainType.DoT_Vulnerability]: [
    Side.Self,
    '持续伤害易伤',
    '/status/Ability_Shining_Bright.webp',
  ],
  [GainType.FollowUpAtk]: [
    Side.Self,
    '追击',
    '/status/Ability_Difficulty_Paying.webp',
  ],
  [GainType.NomralAtk]: [
    Side.Self,
    '普攻',
    '/status/Ability_Cherry_on_Top.webp',
  ],
  [GainType.SkillAtk]: [
    Side.Self,
    '战技',
    '/status/Ability_Master_Its_Tea_Time.webp',
  ],
  [GainType.UltimateAtk]: [
    Side.Self,
    '终结技',
    '/status/Ability_Merit_Bestowed_in_My_Garden.webp',
  ],
  [GainType.CounterAtk]: [
    Side.Self,
    '反击',
    '/status/Ability_Because_We_re_Family.webp',
  ],
  [GainType.Aftertaste]: [
    Side.Self,
    '回味',
    '/path/IconProfessionJoyMiddle.webp',
  ],
  [GainType.CriticalBoost]: [Side.Self, '会心', '/status/Icon_DMG_Boost.webp'],
  [GainType.Kill]: [Side.Self, '击杀', '/property/IconAttack.webp'],
  [GainType.SuccessiveAction]: [
    Side.Self,
    '连续行动',
    '/status/Icon_DMG_Boost.webp',
  ],
  [GainType.BreakDmg]: [Side.Self, '击破伤害', '/property/IconBreakUp.webp'],
  [GainType.SuperBreakDmg]: [
    Side.Self,
    '超击破伤害',
    '/status/Icon_Detonated.webp',
  ],
  [GainType.MakeBreak]: [
    Side.Self,
    '击破目标',
    '/status/Icon_Safeguard_Broken.webp',
  ],
  [GainType.HitWeak]: [
    Side.Self,
    '攻击破弱目标',
    '/status/Icon_Thanatoplum_Rebloom.webp',
  ],
  [GainType.CutToughness]: [
    Side.Self,
    '削韧',
    '/status/Icon_Safeguard_Broken.webp',
  ],
  [GainType.BreakEfficiency]: [
    Side.Self,
    '击破效率',
    '/status/Icon_Safeguard_Broken.webp',
  ],
  [GainType.MON_act_delay]: [
    Side.Enemy,
    '行动延后',
    '/status/IconSpeedDecrease.png',
  ],
  [GainType.MON_Break_VUL]: [
    Side.Enemy,
    '击破易伤',
    '/property/IconBreakUp.webp',
  ],
  [GainType.Point]: [Side.Self, '战技点', '/status/StarBig_WhiteGlow.png'],
  [GainType.Healing]: [Side.Self, '治疗量', '/property/IconHealRatio.webp'],
  [GainType.DebuffRemove]: [
    Side.Self,
    '负面状态解除',
    '/status/Trace_Kinship.webp',
  ],
  [GainType.BeHit]: [
    Side.Self,
    '被击',
    '/path/IconProfessionWarriorMiddle.webp',
  ],
  [GainType.ConsumeHp]: [
    Side.Self,
    '消耗生命',
    '/status/Icon_Prana-Siphoned.png',
  ],
  [GainType.DamageSpread]: [Side.Self, '伤害扩散', '/property/IconAttack.webp'],
  [GainType.Freeze]: [Side.Enemy, '冻结', '/status/Icon_Freeze.webp'],
  [GainType.Brain_in_a_Vat]: [
    Side.Self,
    '罐中脑',
    '/path/IconProfessionMageMiddle.webp',
  ],
  [GainType.Brain_in_a_Vat_Charge]: [
    Side.Self,
    '罐中脑充能',
    '/path/IconProfessionMageMiddle.webp',
  ],
  [GainType.Memory]: [
    Side.Self,
    '记忆',
    '/path/IconProfessionMemoryMiddle.webp',
  ],
  [GainType.Warlock]: [
    Side.Self,
    '虚无',
    '/path/IconProfessionWarlockMiddle.webp',
  ],
  [GainType.Rogue]: [Side.Self, '巡猎', '/path/IconProfessionRogueMiddle.webp'],
  [GainType.Warrior]: [
    Side.Self,
    '毁灭',
    '/path/IconProfessionWarriorMiddle.webp',
  ],
  [GainType.Joy]: [Side.Self, '欢愉', '/path/IconProfessionJoyMiddle.webp'],
  [GainType.Propagation]: [
    Side.Self,
    '繁育',
    '/path/IconProfessionPropagationMiddle.webp',
  ],
  [GainType.Mage]: [Side.Self, '智识', '/path/IconProfessionMageMiddle.webp'],
  [GainType.Shaman]: [
    Side.Self,
    '同谐',
    '/path/IconProfessionShamanMiddle.webp',
  ],
  [GainType.MemElfAtk]: [
    Side.Self,
    '忆灵攻击',
    '/path/IconProfessionMemoryMiddle.webp',
  ],
  [GainType.Rememberance]: [
    Side.Self,
    '执念',
    '/path/IconProfessionMemoryMiddle.webp',
  ],
  [GainType.Nihility]: [
    Side.Self,
    '呢喃',
    '/path/IconProfessionWarlockMiddle.webp',
  ],
  [GainType.NihilityCharge]: [
    Side.Self,
    '呢喃充能',
    '/path/IconProfessionWarlockMiddle.webp',
  ],
  [GainType.Destruction]: [
    Side.Self,
    '耀变',
    '/path/IconProfessionWarriorMiddle.webp',
  ],
  [GainType.DestructionCharge]: [
    Side.Self,
    '耀变充能',
    '/path/IconProfessionWarriorMiddle.webp',
  ],
  [GainType.PropagationBless]: [
    Side.Self,
    '魂茧',
    '/path/IconProfessionPropagationMiddle.webp',
  ],
  [GainType.PropagationBlessCharge]: [
    Side.Self,
    '魂茧充能',
    '/path/IconProfessionPropagationMiddle.webp',
  ],
  [GainType.Harmony]: [
    Side.Self,
    '和音',
    '/path/IconProfessionShamanMiddle.webp',
  ],
}

export { GainType, GAIN_MAP }
