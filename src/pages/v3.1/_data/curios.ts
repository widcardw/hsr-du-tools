import type { Curio } from '@/libs/du/types'
import { partitionAllCurios } from '@/libs/du/curio-utils'

const CURIOS: Curio[] = [
  {
    _id: 9521,
    name: '祈祷之路',
    desc: "<color style='color:#f29e38;'>「巡猎」</color><color style='color:#f29e38;'>「智识」</color>命途角色施放战技时，若战技点大于等于 5 点，则额外消耗 1 点战技点，并使该次战技的暴击伤害提高 150% 。我方目标施放普攻额外恢复 1 点战技点",
    ver: '3.1',
    icon: '1145',
    type: 5,
  },
  {
    _id: 9520,
    name: '自动化体验',
    desc: "<color style='color:#f29e38;'>「毁灭」</color><color style='color:#f29e38;'>「虚无」</color>命途角色施放攻击后，使受到攻击的敌方目标行动提前 20% ，并使其造成的伤害降低 30% ，持续 1 回合",
    ver: '3.1',
    icon: '1149',
    type: 5,
  },
  {
    _id: 9519,
    name: '故事的现在时',
    desc: "<color style='color:#f29e38;'>「记忆」</color>命途的忆灵消失或累计经过 8 回合后，使忆师的攻击力/生命上限/速度/防御力提高，提高数值等同于忆灵的 15% ，最多使忆师的上述属性提高基础数值的 80% ",
    ver: '3.1',
    icon: '1142',
    type: 5,
  },
  {
    _id: 9518,
    name: '利他者的末路',
    desc: "<color style='color:#f29e38;'>「虚数」</color> 属性我方目标累计生命降低值，在任意单位行动后，为随机<color style='color:#f29e38;'>「量子」</color> 属性我方目标恢复等同于该值 50% 的生命值，每回合的治疗量不超过治疗者生命上限的 50% 。<color style='color:#f29e38;'>「量子」</color>属性我方目标累计生命降低值，在任意单位行动后，使随机<color style='color:#f29e38;'>「虚数」</color> 属性我方目标下次施放攻击后，对攻击目标造成等同于该值 300% 的量子属性附加伤害",
    ver: '3.1',
    icon: '1122',
    type: 5,
  },
  {
    _id: 9517,
    name: '熵的逆命题',
    desc: "进入战斗时，<color style='color:#f29e38;'>「风」</color><color style='color:#f29e38;'>「雷」</color>属性我方目标的击破特攻提高，提高至队伍中击破特攻最高的我方目标的 90% ",
    ver: '3.1',
    icon: '1128',
    type: 5,
  },
  {
    _id: 9516,
    name: '偶有越狱',
    desc: "<color style='color:#f29e38;'>「存护」</color>命途角色与<color style='color:#f29e38;'>「记忆」</color>命途忆灵嘲讽值大幅提高，且受到的伤害降低 30% 。受到攻击后使我方全体回复生命上限 15% 的生命值，并使我方全体造成的伤害提高 50% ，持续 2 回合。该效果每回合最多触发1次",
    ver: '3.1',
    icon: '1125',
    type: 5,
  },
  {
    _id: 9515,
    name: '拟赤月',
    desc: "<color style='color:#f29e38;'>「丰饶」</color>命途角色攻击敌方目标时，有 150% 的基础概率使其陷入【坏死】状态：回合开始时，受到等同于角色攻击力 600% 的火属性持续伤害，持续 3 回合，并使当前承受的其他灼烧状态立刻产生相当于原伤害 200% 的伤害",
    ver: '3.1',
    icon: '1124',
    type: 5,
  },
  {
    _id: 9514,
    name: '静谧的歌声',
    desc: "<color style='color:#f29e38;'>「同谐」</color>命途角色对我方目标施放普攻/战技/终结技时，为我方全体角色提供能够抵消等同于各自生命上限 25% 伤害的护盾，持续 2 回合",
    ver: '3.1',
    icon: '1119',
    type: 5,
  },
  {
    _id: 9513,
    name: '十光年不晚',
    desc: "<color style='color:#f29e38;'><color style='color:#f29e38;'>「巡猎」</color></color>命途角色发动攻击造成伤害时，对相邻目标额外造成等同于原伤害 40% 的固定数值的伤害",
    ver: '3.1',
    icon: '1129',
    type: 5,
  },
  {
    _id: 9512,
    name: '通向彗星之路',
    desc: "<color style='color:#f29e38;'>「冰」</color>属性我方目标造成伤害提高 50% ，速度提高 15% ，提供护盾量提高 10% 。战斗中同时有 4 名及以上<color style='color:#f29e38;'>「冰」</color>属性角色或忆灵时，使效果数值提高原数值的 200% ，并对我方全体目标生效",
    ver: '3.1',
    icon: '1095',
    type: 5,
  },
  {
    _id: 9511,
    name: '风中花蕾',
    desc: "<color style='color:#f29e38;'>「风」</color>属性我方目标攻击敌方目标后，使其陷入一层【太阳风】，最多叠加 10 层。<color style='color:#f29e38;'>「雷」</color>属性我方目标施放攻击后，清除攻击目标所有【太阳风】，并对其造成总层数* 400% <u>基础伤害</u>的风属性附加伤害<br><b>基础伤害</b><br>敌方目标等级、阈值协议越高，造成的基础伤害越高。",
    ver: '3.1',
    icon: '1102',
    type: 5,
  },
  {
    _id: 9510,
    name: '天才的迷茫时间',
    desc: "<color style='color:#f29e38;'>「量子」</color>属性我方目标获得战技点后，使我方全体获得 2 层【激发】，我方目标施放普攻/战技发动攻击后，消耗全体1层【激发】对攻击目标造成等同于 300% 攻击力的量子属性附加伤害，并有 100% 基础概率使其陷入纠缠状态，持续1回合",
    ver: '3.1',
    icon: '1094',
    type: 5,
  },
  {
    _id: 9509,
    name: '神圣容颜',
    desc: "<color style='color:#f29e38;'>「物理」</color>属性角色数量大于等于 2 时，这些角色击破特攻提高 150% ，攻击造成 75% 的无视弱点削韧，且击破敌方目标弱点时对敌方全体造成 200% 的物理属性击破伤害",
    ver: '3.1',
    icon: '1107',
    type: 5,
  },
  {
    _id: 9508,
    name: '美味球藻糖',
    desc: "<color style='color:#f29e38;'>「物理」「火」</color>属性角色施放终结技后，会使我方全体回复等同于生命上限 30% 的生命值，并使自身速度提高 25% ，持续 1 回合，最多叠加 2 层",
    ver: '3.1',
    icon: '1091',
    type: 5,
  },
  {
    _id: 9507,
    name: '喧哗上等',
    desc: "<color style='color:#f29e38;'>「火」</color>属性角色数量为1/2/3/4时，造成的火属性持续伤害提高等同于攻击力的 50% / 100% / 150% / 300% ，施放战技发动攻击后，使攻击目标当前承受的灼烧状态立即产生相当于原伤害 30% 的伤害",
    ver: '3.1',
    icon: '1098',
    type: 5,
  },
  {
    _id: 9506,
    name: '平行宇宙对讲机',
    desc: "<color style='color:#f29e38;'>「智识」</color>角色攻击消灭敌方目标后，若伤害溢出，对攻击目标中当前生命值最高的目标造成 1000% <u>基础伤害</u>+ 100% 溢出值的真实伤害<br><b>基础伤害</b><br>敌方目标等级、阈值协议越高，造成的基础伤害越高。",
    ver: '3.1',
    icon: '1105',
    type: 5,
  },
  {
    _id: 9505,
    name: '入梦罐',
    desc: "我方目标受到自身以外<color style='color:#f29e38;'>「同谐」</color>角色的行动提前效果后，会获得双倍的行动延后效果，每延后1%，使其回复 0.2% 生命值，并使下回合内攻击后，额外造成原伤害 1% 的真实伤害，每回合最多受到 200% 该行动延后效果",
    ver: '3.1',
    icon: '1106',
    type: 5,
  },
  {
    _id: 9504,
    name: '醒觉 -310 ',
    desc: "<color style='color:#f29e38;'>「虚数」「冰」</color> 属性我方目标施加的控制状态无视冻结/控制/禁锢抗性，解除时对敌方目标造成 1500% 的<u>基础伤害</u>并使其造成的伤害降低 5% ，造成的伤害与施加的伤害降低可叠加，最多叠加 4 次<br><b>基础伤害</b><br>敌方目标等级、阈值协议越高，造成的基础伤害越高。",
    ver: '3.1',
    icon: '1097',
    type: 5,
  },
  {
    _id: 9503,
    name: '石语者结片',
    desc: "<color style='color:#f29e38;'>「雷」</color>属性我方目标会抵抗所有使自身陷入控制类负面状态的效果，触发该效果时，行动提前 50% 。每受到1%行动提前效果，下回合造成的伤害提高 1% ，最多提高 200% ",
    ver: '3.1',
    icon: '1108',
    type: 5,
  },
  {
    _id: 9502,
    name: '云间肉排',
    desc: "<color style='color:#f29e38;'>「毁灭」「虚无」</color>命途角色击破特攻提高 25% 。攻击处于弱点击破状态的敌方目标后，以 80% 的比例触发火、风、雷、物理属性的击破效果，敌方目标每次被弱点击破后最多触发 1 次效果",
    ver: '3.1',
    icon: '1113',
    type: 5,
  },
  {
    _id: 9501,
    name: '尊严与热忱',
    desc: "队伍中有<color style='color:#f29e38;'>「存护」</color>命途角色时，我方目标获得特殊护盾，获得其他护盾时该护盾会增加获取护盾量 100% 的护盾量。超过生命上限 30% 的部分，会在回合开始时失去 90% ，并回复 10% 生命值",
    ver: '3.1',
    icon: '1101',
    type: 5,
  },
  {
    _id: 9500,
    name: '营养过剩',
    desc: "我方目标受到来自<color style='color:#f29e38;'>「丰饶」</color> 命途角色的治疗后，获得等同于溢出治疗量 100% 的可叠加护盾，该护盾上限等同于我方目标生命上限的 50% ，回合结束时移除",
    ver: '3.1',
    icon: '1111',
    type: 5,
  },
  {
    _id: 8901,
    name: '高热饮食（破解版）',
    desc: '进入战斗时，获得随机临界方程效果，不会覆盖已激活临界方程效果',
    ver: '3.1',
    icon: '1141',
    type: 3,
  },
  {
    _id: 8168,
    name: '片刻安谧',
    desc: '获得该奇物时，立即获得 5 个随机1星方程，并将所有2-3星方程替换为随机1星方程。每有1个已激活的1星方程，我方全体造成的伤害提高 25% ，激活 4 个或以上1星方程时，伤害加成提高到 60% ',
    ver: '3.1',
    icon: '1157',
    type: 3,
  },
  {
    _id: 8167,
    name: '铸铁的齿轮指环',
    desc: '获得宇宙碎片的数量提高 30% ，但商店中物品的售价和重铸消耗的宇宙碎片数量提高 30% ',
    ver: '3.1',
    icon: '1138',
    type: 1,
  },
  {
    _id: 8166,
    name: '深度睡眠',
    desc: '出现【冒险】区域的概率提升。进入【冒险】区域时获得 50 宇宙碎片，完成区域时的奖励档位提升1档',
    ver: '3.1',
    icon: '1162',
    type: 2,
  },
  {
    _id: 8165,
    name: '绑架机器人',
    desc: '出现【遭遇】区域的概率提高。累计进入 1 / 3 / 5 次【遭遇】区域时，获得1个随机1/2/3星方程，触发所有效果后该奇物损毁',
    ver: '3.1',
    icon: '1150',
    type: 2,
  },
  {
    _id: 8164,
    name: '自适应礼品盒',
    desc: '获得奇物时，失去所有宇宙碎片，然后随机获得失去值 10% - 200% 的宇宙碎片',
    ver: '3.1',
    icon: '1159',
    type: 1,
  },
  {
    _id: 8163,
    name: '机运长袍',
    desc: '进入【事件】区域时，失去 150 宇宙碎片并将事件替换为奖励，宇宙碎片不足时该奇物损毁',
    ver: '3.1',
    icon: '1154',
    type: 2,
  },
  {
    _id: 8162,
    name: '知识注射枪',
    desc: '祝福和奇物商店中出现 2 个免费商品，其他商品的售价提高 100% ',
    ver: '3.1',
    icon: '1169',
    type: 1,
  },
  {
    _id: 8161,
    name: '杀死那只蝴蝶',
    desc: '累计开启 6 个宝箱后，出现宝箱【奇遇】区域的概率大幅提升。进入【奇遇】区域后，丢弃该奇物',
    ver: '3.1',
    icon: '1135',
    type: 2,
  },
  {
    _id: 8160,
    name: '昨天的重量',
    desc: '进入区域时，获得 35 宇宙碎片，当宇宙碎片减少次数累计达到 3 次时，该奇物损毁',
    ver: '3.1',
    icon: '1164',
    type: 1,
  },
  {
    _id: 8159,
    name: '铸铁的机动指环',
    desc: '获得宇宙碎片的数量降低 50% ，重铸方程和祝福消耗的宇宙碎片数量降低 100% ，重铸祝福的次数上限降低为 7 ',
    ver: '3.1',
    icon: '1137',
    type: 1,
  },
  {
    _id: 8158,
    name: '丰裕滚石',
    desc: '进入第三位面，及第三位面获得该奇物时，获得1个金血祝颂',
    ver: '3.1',
    icon: '1163',
    type: 1,
  },
  {
    _id: 8157,
    name: '狂欢之尾',
    desc: '所有奇物获得时触发的效果会额外触发1次，每个区域最多触发 3 次',
    ver: '3.1',
    icon: '1165',
    type: 3,
  },
  {
    _id: 8156,
    name: '不眠鸱鸮',
    desc: '白昼时，我方全体回复量与获得的护盾量提高 20% ，受到的伤害降低 12% ，且攻击敌方目标时有 25% 的概率选择错误的目标',
    ver: '3.1',
    icon: '1151',
    type: 2,
  },
  {
    _id: 8155,
    name: '法度刻印',
    desc: '夜晚时，我方全体速度提高 25% ，暴击伤害提高 50% ，且行动条变为不可见状态',
    ver: '3.1',
    icon: '1153',
    type: 2,
  },
  {
    _id: 8154,
    name: '快乐电视机',
    desc: '连续进入相同区域时，失去 25 宇宙碎片和 1 个随机奇物',
    ver: '3.1',
    icon: '1167',
    type: 4,
  },
  {
    _id: 8153,
    name: '虫群录像带',
    desc: '祝福排排乐和奇物大转盘消耗的宇宙碎片数量提高 25% ',
    ver: '3.1',
    icon: '1152',
    type: 4,
  },
  {
    _id: 8152,
    name: '同谐火漆',
    desc: '获得该奇物时，随机获得 1 个「同谐」的祝福。并在战斗胜利后选择祝福时，提高「同谐」的祝福出现的概率',
    ver: '3.1',
    icon: '1158',
    type: 1,
  },
  {
    _id: 8151,
    name: '垂语果实',
    desc: '立即获得 4 个随机祝福。失去此奇物后会再次获得它',
    ver: '3.1',
    icon: '1161',
    type: 2,
  },
  {
    _id: 8150,
    name: '垂语果实',
    desc: '立即获得 4 个随机祝福。失去此奇物后会再次获得它',
    ver: '3.1',
    icon: '1161',
    type: 2,
  },
  {
    _id: 8149,
    name: '垂语果实',
    desc: '立即获得 3 个随机祝福。失去此奇物后会再次获得它，并使奖励的祝福数量提高 1 个，最多提高至 4 个',
    ver: '3.1',
    icon: '1161',
    type: 2,
  },
  {
    _id: 8148,
    name: '垂语果实',
    desc: '立即获得 2 个随机祝福。失去此奇物后会再次获得它，并使奖励的祝福数量提高 1 个，最多提高至 4 个',
    ver: '3.1',
    icon: '1161',
    type: 2,
  },
  {
    _id: 8147,
    name: '垂语果实',
    desc: '立即获得 1 个随机祝福。失去此奇物后会再次获得它，并使奖励的祝福数量提高 1 个，最多提高至 4 个',
    ver: '3.1',
    icon: '1161',
    type: 2,
  },
  {
    _id: 8146,
    name: '神启石镜',
    desc: '进入【遭遇】或【奖励】区域时，有 30% 概率获得 1 个方程所需的祝福',
    ver: '3.1',
    icon: '1166',
    type: 2,
  },
  {
    _id: 8145,
    name: '神启石镜',
    desc: '进入【遭遇】或【奖励】区域时，有 50% 概率获得 1 个随机祝福',
    ver: '3.1',
    icon: '1166',
    type: 2,
  },
  {
    _id: 8144,
    name: '神启石镜',
    desc: '进入【遭遇】或【奖励】区域时，有 30% 概率获得 1 个随机奇物',
    ver: '3.1',
    icon: '1166',
    type: 2,
  },
  {
    _id: 8143,
    name: '神启石镜',
    desc: '进入【遭遇】或【奖励】区域时，有 50% 概率获得 1 个随机奇物，可能包含负面奇物',
    ver: '3.1',
    icon: '1166',
    type: 2,
  },
  {
    _id: 8142,
    name: '神启石镜',
    desc: '进入【战斗】或【事件】区域时，有 30% 概率获得 1 个方程所需的祝福',
    ver: '3.1',
    icon: '1166',
    type: 2,
  },
  {
    _id: 8141,
    name: '神启石镜',
    desc: '进入【战斗】或【事件】区域时，有 50% 概率获得 1 个随机祝福',
    ver: '3.1',
    icon: '1166',
    type: 2,
  },
  {
    _id: 8140,
    name: '神启石镜',
    desc: '进入【战斗】或【事件】区域时，有 30% 概率获得 1 个随机奇物',
    ver: '3.1',
    icon: '1166',
    type: 2,
  },
  {
    _id: 8139,
    name: '神启石镜',
    desc: '进入【战斗】或【事件】区域时，有 50% 概率获得 1 个随机奇物，可能包含负面奇物',
    ver: '3.1',
    icon: '1166',
    type: 2,
  },
  {
    _id: 8138,
    name: '真实机兵',
    desc: '失去奇物时，获得 75 宇宙碎片',
    ver: '3.1',
    icon: '1168',
    type: 2,
  },
  {
    _id: 8137,
    name: '绝对自灭药膏',
    desc: '立即获得 2 个方程所需的祝福，失去 2 个方程不需要的祝福',
    ver: '3.1',
    icon: '1156',
    type: 1,
  },
  {
    _id: 8136,
    name: '量子大乐透',
    desc: '摧毁可破坏物时有小概率获得负面奇物，但也有小概率使该奇物损毁。奇物损毁时，获得 400 宇宙碎片',
    ver: '3.1',
    icon: '1136',
    type: 1,
  },
  {
    _id: 8135,
    name: '祭献投枪',
    desc: '进入【战斗】【转化】【遭遇】【首领】区域时，获得 35 宇宙碎片，连续进入时额外获得 35 宇宙碎片。进入【事件】【奖励】【冒险】【财富】区域时失去 35 宇宙碎片',
    ver: '3.1',
    icon: '1155',
    type: 1,
  },
  {
    _id: 8134,
    name: '沉吟圆盘',
    desc: '进入【财富】区域时，将宝箱替换为诅咒宝箱，生效后该奇物损毁。奇物损毁时获得 2 个随机1星方程',
    ver: '3.1',
    icon: '1160',
    type: 2,
  },
  {
    _id: 8133,
    name: '沉吟圆盘',
    desc: '进入【遭遇】区域时，我方全体损失 20% 当前生命值，生效后该奇物损毁。奇物损毁时获得 2 个1-2星奇物',
    ver: '3.1',
    icon: '1160',
    type: 2,
  },
  {
    _id: 8132,
    name: '沉吟圆盘',
    desc: '进入【战斗】区域时，将敌人替换为普通精英，生效后该奇物损毁。奇物损毁时获得 2 个祝福',
    ver: '3.1',
    icon: '1160',
    type: 2,
  },
  {
    _id: 8131,
    name: '沉吟圆盘',
    desc: '进入【事件】区域时，固定出现2个微妙的事件。生效后该奇物损毁',
    ver: '3.1',
    icon: '1160',
    type: 2,
  },
  {
    _id: 8130,
    name: '旧皮囊',
    desc: '在造物调试台中，减少 1 点可使用热量',
    ver: '3.1',
    icon: '1120',
    type: 4,
  },
  {
    _id: 8129,
    name: '菠萝',
    desc: '累计进入 3 个区域后该奇物损毁，并使我方全体损失 99% 当前生命值',
    ver: '3.1',
    icon: '1115',
    type: 4,
  },
  {
    _id: 8128,
    name: '绝对失败处方',
    desc: '进入战斗时，我方全体损失全部能量并消耗所有战技点',
    ver: '3.1',
    icon: '1103',
    type: 4,
  },
  {
    _id: 8127,
    name: '绝对失败处方',
    desc: '进入战斗时，我方全体弱点击破效率降低 100% ，持续 1 回合',
    ver: '3.1',
    icon: '1103',
    type: 4,
  },
  {
    _id: 8126,
    name: '绝对失败处方',
    desc: '进入战斗时，我方全体造成的伤害降低 99% ，持续 1 回合',
    ver: '3.1',
    icon: '1103',
    type: 4,
  },
  {
    _id: 8125,
    name: '绝对失败处方',
    desc: '进入战斗时，我方全体消耗等同于当前生命值 50% 的生命值',
    ver: '3.1',
    icon: '1103',
    type: 4,
  },
  {
    _id: 8124,
    name: '绝对失败处方',
    desc: '进入战斗时，我方全体第一次受到攻击后，额外消耗等同于角色当前生命值 50% 的生命值',
    ver: '3.1',
    icon: '1103',
    type: 4,
  },
  {
    _id: 8123,
    name: '绝对失败处方',
    desc: '进入战斗时，我方全体有 150% 的基础概率陷入裂伤状态，持续 5 回合，裂伤状态下，回合开始时受到等同于生命上限 20% 的物理属性持续伤害',
    ver: '3.1',
    icon: '1103',
    type: 4,
  },
  {
    _id: 8122,
    name: '绝对失败处方',
    desc: '进入战斗时，我方全体有 150% 的基础概率陷入冻结状态，持续 1 回合',
    ver: '3.1',
    icon: '1103',
    type: 4,
  },
  {
    _id: 8121,
    name: '绝对失败处方',
    desc: '进入战斗时，敌方全体行动提前 100% ',
    ver: '3.1',
    icon: '1103',
    type: 4,
  },
  {
    _id: 8120,
    name: '天彗合金Ⅲ型',
    desc: '无效果，同时最多持有一个',
    ver: '3.1',
    icon: '1109',
    type: 2,
  },
  {
    _id: 8119,
    name: '塔洛特玩偶',
    desc: '进入战斗时，我方全体对敌方目标施放技能时有 50% 概率选择错误的目标， 4 次战斗后，该奇物损毁',
    ver: '3.1',
    icon: '1093',
    type: 4,
  },
  {
    _id: 8118,
    name: '「奇思狂想」机器团',
    desc: '角色施放秘技时，额外消耗 1 秘技点',
    ver: '3.1',
    icon: '1076',
    type: 4,
  },
  {
    _id: 8117,
    name: '「极佳念头」彩虹机',
    desc: '携带该奇物进入【冒险】区域后，使得该区域的限制时间降低 30% ',
    ver: '3.1',
    icon: '1075',
    type: 4,
  },
  {
    _id: 8116,
    name: '「中等念头」群体机',
    desc: '商品价格提高 25% ',
    ver: '3.1',
    icon: '1083',
    type: 4,
  },
  {
    _id: 8115,
    name: '「无效念头」代码机',
    desc: '进入战斗时，角色失去等同于能量上限的能量',
    ver: '3.1',
    icon: '1071',
    type: 4,
  },
  {
    _id: 8114,
    name: '分裂咕咕钟',
    desc: '角色攻击力降低 5% 。',
    ver: '3.1',
    icon: '1053',
    type: 4,
  },
  {
    _id: 8113,
    name: '分裂咕咕钟',
    desc: '角色攻击力降低 5% 。',
    ver: '3.1',
    icon: '1053',
    type: 4,
  },
  {
    _id: 8112,
    name: '分裂咕咕钟',
    desc: '角色攻击力降低 5% 。',
    ver: '3.1',
    icon: '1053',
    type: 4,
  },
  {
    _id: 8111,
    name: '分裂咕咕钟',
    desc: '角色攻击力降低 5% ，战斗胜利后有概率分裂出1个复制体，复制体最多同时存在 3 个',
    ver: '3.1',
    icon: '1053',
    type: 4,
  },
  {
    _id: 8110,
    name: '破碎咕咕钟',
    desc: '战斗胜利后获得的宇宙碎片降低 25% ，展开 1 个方程后奇物损毁',
    ver: '3.1',
    icon: '1059',
    type: 4,
  },
  {
    _id: 8109,
    name: '机械咕咕钟',
    desc: '进入战斗时，消耗 2 个战技点',
    ver: '3.1',
    icon: '1010',
    type: 4,
  },
  {
    _id: 8108,
    name: '公司咕咕钟',
    desc: '覆写祝福、覆写方程所需的宇宙碎片数量提高 25% ',
    ver: '3.1',
    icon: '1039',
    type: 4,
  },
  {
    _id: 8107,
    name: '永动咕咕钟',
    desc: '每进入下一区域，损失 4% 当前持有的宇宙碎片',
    ver: '3.1',
    icon: '1041',
    type: 4,
  },
  {
    _id: 8106,
    name: '黑森林咕咕钟',
    desc: '进入战斗时，随机使 1 名我方目标被敌方目标攻击的概率大幅提高，持续 5 回合',
    ver: '3.1',
    icon: '1038',
    type: 4,
  },
  {
    _id: 8105,
    name: '卜筮咕咕钟',
    desc: '战斗胜利后，选择祝福时，可选择的祝福选项会减少 1 个',
    ver: '3.1',
    icon: '1040',
    type: 4,
  },
  {
    _id: 8104,
    name: '英雄凯旋',
    desc: '进入战斗时，对生命值最高的敌方目标造成等同于其生命上限 100% 的伤害，并获得 88 宇宙碎片，在首领区域造成的伤害减半',
    ver: '3.1',
    icon: '1148',
    type: 3,
  },
  {
    _id: 8103,
    name: '虚高一丈',
    desc: '获得 1 / 2 / 3 星奇物时，立即获得 20 / 40 / 120 宇宙碎片。每拥有1个 1 / 2 / 3 星奇物，进入战斗时，使我方目标攻击力提高 3% / 6% / 20% ',
    ver: '3.1',
    icon: '1132',
    type: 3,
  },
  {
    _id: 8102,
    name: '入乡随俗',
    desc: '【财富】区域会出现更多游乐装置。提高【战斗】【事件】【遭遇】【奖励】【交易】区域额外游乐装置出现的概率。将出现特殊的祝福排排乐和奇物大转盘，且使用次数增加。每游玩一次游乐装置，我方全体造成的伤害提高 10% ',
    ver: '3.1',
    icon: '1127',
    type: 3,
  },
  {
    _id: 8101,
    name: '与死重逢',
    desc: '立即获得 1 个当前无法展开的方程。每展开1个方程后，立即获得1个随机当前无法展开方程，最多通过该方式获得 3 个方程。每有1个展开的方程，使我方全体造成的伤害提高 10% ',
    ver: '3.1',
    icon: '1112',
    type: 3,
  },
  {
    _id: 8100,
    name: '鲁珀特帝国差分机',
    desc: '获得该奇物以及每进入区域时，获得 200 宇宙碎片， 2 个随机祝福和 2 个随机奇物。进入战斗时，我方全体暴击率提高 60% ，暴击伤害提高 16% ',
    ver: '3.1',
    icon: '1088',
    type: 3,
  },
  {
    _id: 8099,
    name: '瘟疫巢都',
    desc: '立即获得 4 个随机负面奇物，进入区域时随机失去最多 1 个负面奇物，并获得等量随机祝福。每通过这种方式失去1个负面奇物，进入战斗时我方全体造成的伤害提高 10% ',
    ver: '3.1',
    icon: '1096',
    type: 3,
  },
  {
    _id: 8098,
    name: '记忆轮',
    desc: '立即获得 2 个随机方程。每进入区域时，将所有方程置换为随机相同星级方程。进入战斗时，获得所有未展开方程的效果',
    ver: '3.1',
    icon: '1086',
    type: 3,
  },
  {
    _id: 8097,
    name: '湮灭烛剪',
    desc: '每击碎1个可破坏物，进入战斗时，我方全体造成的伤害提高 5% ，每开启一个战利品，我方全体生命上限提高 8% ',
    ver: '3.1',
    icon: '1046',
    type: 3,
  },
  {
    _id: 8096,
    name: '龋齿星系模型',
    desc: '立即失去 100% 宇宙碎片。每通过任意方式失去 100 宇宙碎片，进入战斗时我方全体暴击伤害提高 36% ',
    ver: '3.1',
    icon: '1065',
    type: 3,
  },
  {
    _id: 8095,
    name: '家族缘结',
    desc: '立即获得 2 个可损毁奇物。每当奇物损毁时，立即获得 1 个可损毁奇物。每拥有1个已损毁的奇物，进入战斗时，我方全体造成的伤害提高 30% ',
    ver: '3.1',
    icon: '1057',
    type: 3,
  },
  {
    _id: 8094,
    name: '纯美之袍',
    desc: '进入战斗时，每拥有 100 宇宙碎片，我方全体造成的伤害提高 20% 。进入【战斗】、【遭遇】或【首领】区域时，获得等同于当前持有宇宙碎片 6% 的宇宙碎片',
    ver: '3.1',
    icon: '1014',
    type: 3,
  },
  {
    _id: 8093,
    name: '奥塔牌',
    desc: '第三位面首领将为【步离战首·呼雷（完整）】，在第三位面【首领】区域进入战斗时，我方全体造成的伤害提高 50% ',
    ver: '3.1',
    icon: '1140',
    type: 2,
  },
  {
    _id: 8091,
    name: '奥塔牌',
    desc: '第三位面首领将为【奇想林中的蕉研组（完整）】，在第三位面【首领】区域进入战斗时，我方全体造成的伤害提高 50% ',
    ver: '3.1',
    icon: '1140',
    type: 2,
  },
  {
    _id: 8090,
    name: '奥塔牌',
    desc: '第三位面首领将为【浮烟（完整）】，在第三位面【首领】区域进入战斗时，我方全体造成的伤害提高 50% ',
    ver: '3.1',
    icon: '1140',
    type: 2,
  },
  {
    _id: 8089,
    name: '奥塔牌',
    desc: '第三位面首领将为【蛮神，疯王，纷争的化身（完整）】，在第三位面【首领】区域进入战斗时，我方全体造成的伤害提高 50% ',
    ver: '3.1',
    icon: '1140',
    type: 2,
  },
  {
    _id: 8088,
    name: '末日复眼•先行版',
    desc: '获得该奇物时，立即获得 4 个拥有祝福数量最多的命途的祝福。覆写祝福、覆写方程所需的宇宙碎片提高 1000% ',
    ver: '3.1',
    icon: '1144',
    type: 2,
  },
  {
    _id: 8087,
    name: '无人通讯',
    desc: '奇物损毁时，使其恢复如新。效果触发 2 次后，该奇物损毁',
    ver: '3.1',
    icon: '1147',
    type: 2,
  },
  {
    _id: 8086,
    name: '天才俱乐部危险八卦',
    desc: '无法获得宇宙碎片，每因为该奇物的效果损失 80 宇宙碎片，获得 1 个随机 1 - 3 星奇物，累计获得 5 个奇物后损毁',
    ver: '3.1',
    icon: '1146',
    type: 1,
  },
  {
    _id: 8085,
    name: '和平箱',
    desc: '展开 1 个 2 星及以上方程后，获得 1 个随机祝福',
    ver: '3.1',
    icon: '1143',
    type: 2,
  },
  {
    _id: 8084,
    name: '高热饮食',
    desc: '进入战斗时，获得随机临界方程效果，战斗胜利 1 次后，该奇物损毁。不会覆盖已激活临界方程效果',
    ver: '3.1',
    icon: '1141',
    type: 2,
  },
  {
    _id: 8083,
    name: '古老通讯',
    desc: '出现次元扑满的概率大幅提高，进入存在次元扑满的区域后，该奇物损毁',
    ver: '3.1',
    icon: '1117',
    type: 2,
  },
  {
    _id: 8082,
    name: '有形幸运',
    desc: '进入区域时，如果宇宙碎片数量小于 250 ，则将宇宙碎片补足为 250 ',
    ver: '3.1',
    icon: '1134',
    type: 2,
  },
  {
    _id: 8081,
    name: '无主失物',
    desc: '出现【奇遇】区域的概率大幅提高。进入【奇遇】区域后，丢弃该奇物',
    ver: '3.1',
    icon: '1131',
    type: 2,
  },
  {
    _id: 8080,
    name: '化作尘泥',
    desc: '在造物调试台中，额外获得 5 点可使用热量',
    ver: '3.1',
    icon: '1118',
    type: 2,
  },
  {
    _id: 8079,
    name: '塔奥牌',
    desc: '累计进入 4 个区域后，该奇物损毁，并失去 2 个随机祝福',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8078,
    name: '塔奥牌',
    desc: '展开 1 个方程后，获得 2 个随机祝福。效果触发 2 次后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8077,
    name: '塔奥牌',
    desc: '连续进入相同类型的区域后，获得 1 个随机祝福。效果触发 3 次后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8076,
    name: '塔奥牌',
    desc: '战斗胜利后，获得 1 个随机祝福。效果触发 3 次后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8075,
    name: '塔奥牌',
    desc: '获取的宇宙碎片数量降低 30% 。累计进入 3 个区域后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8074,
    name: '塔奥牌',
    desc: '在商店中购买祝福和奇物时，返还 40% 花费的宇宙碎片。离开【交易】区域后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8073,
    name: '塔奥牌',
    desc: '进入区域时，获得 150 宇宙碎片。累计进入 3 个区域后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8072,
    name: '塔奥牌',
    desc: '获取的宇宙碎片数量提高 50% 。累计进入 4 个区域后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8071,
    name: '塔奥牌',
    desc: '进入战斗时，角色受到攻击后，消耗 10 点能量，持续 2 回合。累计 3 次战斗后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8070,
    name: '塔奥牌',
    desc: '我方目标受到攻击后，回复等同于生命上限 15% 的生命值。累计 4 次战斗后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8069,
    name: '塔奥牌',
    desc: '我方全体速度提高 30% 。累计 4 次战斗后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8068,
    name: '塔奥牌',
    desc: '进入战斗时，敌方全体行动延后 200% 。累计 4 次战斗后，该奇物损毁',
    ver: '3.1',
    icon: '1114',
    type: 2,
  },
  {
    _id: 8067,
    name: '天彗合金Ⅱ型',
    desc: '无效果，同时最多持有一个',
    ver: '3.1',
    icon: '1109',
    type: 1,
  },
  {
    _id: 8066,
    name: '喜乐熏香',
    desc: '获得该奇物时，获得 2 个随机方程。在【首领】区域进入战斗时，每有1个未展开的方程，敌方全体生命上限提高 40% ，攻击力提高 20% ',
    ver: '3.1',
    icon: '1110',
    type: 2,
  },
  {
    _id: 8065,
    name: '朋克洛德问候',
    desc: '进入战斗时，我方编队中的第一位角色速度提高 40% ，最后一位角色速度降低 40% ',
    ver: '3.1',
    icon: '1104',
    type: 2,
  },
  {
    _id: 8064,
    name: '阿阮袋',
    desc: '立刻获得 3 个随机祝福，战斗胜利后选择祝福时选项数量变为1， 2 次战斗后该奇物损毁',
    ver: '3.1',
    icon: '1078',
    type: 2,
  },
  {
    _id: 8063,
    name: '海绵王',
    desc: '每进入一个区域，我方全体损失 80% 当前生命值，生命上限提高 10% ，效果触发 4 次后该奇物损毁，生命上限提高效果在奇物损毁后仍会生效',
    ver: '3.1',
    icon: '1072',
    type: 2,
  },
  {
    _id: 8062,
    name: '腐化异木果实',
    desc: '角色会抵抗所有使自身陷入控制类负面状态的效果。每次抵抗都会消耗等同于自身 20% 生命上限的生命值',
    ver: '3.1',
    icon: '1073',
    type: 2,
  },
  {
    _id: 8061,
    name: '理性的溃败',
    desc: '获得该奇物时，立即获得 3 个不同命途的随机 1 星祝福各 1 个',
    ver: '3.1',
    icon: '1080',
    type: 2,
  },
  {
    _id: 8060,
    name: '人造陨石球',
    desc: '获得该奇物时，立即获得 1 - 3 个拥有祝福数量最多的命途的祝福',
    ver: '3.1',
    icon: '1061',
    type: 2,
  },
  {
    _id: 8059,
    name: '一撮胡须火药',
    desc: '获得该奇物时，获得 1 个加权奇物',
    ver: '3.1',
    icon: '1066',
    type: 2,
  },
  {
    _id: 8058,
    name: '虚构机兵',
    desc: '角色回合开始时，回复等同于其生命上限 20% 的生命值',
    ver: '3.1',
    icon: '1064',
    type: 2,
  },
  {
    _id: 8057,
    name: '纯美骑士精神',
    desc: '获得该奇物时，获得 1 个随机方程',
    ver: '3.1',
    icon: '1051',
    type: 2,
  },
  {
    _id: 8056,
    name: '愚者面具',
    desc: '将所有祝福替换为随机祝福，强化情况会被保留，且有概率替换为更高稀有度的祝福',
    ver: '3.1',
    icon: '1067',
    type: 2,
  },
  {
    _id: 8055,
    name: '天才俱乐部普通八卦',
    desc: '获得该奇物后，获得宇宙碎片时额外获得 75% ，但战斗结束无法再获取祝福',
    ver: '3.1',
    icon: '1063',
    type: 2,
  },
  {
    _id: 8054,
    name: '星际大乐透',
    desc: '击碎可破坏物后有小概率获得1个随机祝福，但也有小概率使该奇物损毁并使我方全体损失全部能量与秘技点',
    ver: '3.1',
    icon: '1068',
    type: 1,
  },
  {
    _id: 8053,
    name: '分裂银币',
    desc: '立即获得等同于当前持有的宇宙碎片 50% 的宇宙碎片',
    ver: '3.1',
    icon: '1045',
    type: 2,
  },
  {
    _id: 8052,
    name: '银河大乐透',
    desc: '击碎可破坏物后有小概率获得1件奇物，但也有小概率使该奇物损毁并使我方全体损失 99% 当前生命值',
    ver: '3.1',
    icon: '1026',
    type: 1,
  },
  {
    _id: 8051,
    name: '时空棱镜',
    desc: '进入战斗时，所有角色星魂同调等级提高 1 级',
    ver: '3.1',
    icon: '1028',
    type: 2,
  },
  {
    _id: 8050,
    name: '碎星芳饵',
    desc: '场景中角色移动速度提高 20% 。角色速度提高 20% ',
    ver: '3.1',
    icon: '1029',
    type: 1,
  },
  {
    _id: 8049,
    name: '智识火漆',
    desc: '获得该奇物时，随机获得1个「智识」的祝福。并在战斗胜利后选择祝福时，提高「智识」的祝福出现的概率',
    ver: '3.1',
    icon: '1082',
    type: 1,
  },
  {
    _id: 8048,
    name: '繁育火漆',
    desc: '获得该奇物时，随机获得1个「繁育」的祝福。并在战斗胜利后选择祝福时，提高「繁育」的祝福出现的概率',
    ver: '3.1',
    icon: '1052',
    type: 1,
  },
  {
    _id: 8047,
    name: '虚无火漆',
    desc: '获得该奇物时，随机获得1个「虚无」的祝福。并在战斗胜利后选择祝福时，提高「虚无」的祝福出现的概率',
    ver: '3.1',
    icon: '1047',
    type: 1,
  },
  {
    _id: 8046,
    name: '记忆火漆',
    desc: '获得该奇物时，随机获得1个「记忆」的祝福。并在战斗胜利后选择祝福时，提高「记忆」的祝福出现的概率',
    ver: '3.1',
    icon: '1024',
    type: 1,
  },
  {
    _id: 8045,
    name: '毁灭火漆',
    desc: '获得该奇物时，随机获得1个「毁灭」的祝福。并在战斗胜利后选择祝福时，提高「毁灭」的祝福出现的概率',
    ver: '3.1',
    icon: '1023',
    type: 1,
  },
  {
    _id: 8044,
    name: '巡猎火漆',
    desc: '获得该奇物时，随机获得1个「巡猎」的祝福。并在战斗胜利后选择祝福时，提高「巡猎」的祝福出现的概率',
    ver: '3.1',
    icon: '1022',
    type: 1,
  },
  {
    _id: 8043,
    name: '欢愉火漆',
    desc: '获得该奇物时，随机获得1个「欢愉」的祝福。并在战斗胜利后选择祝福时，提高「欢愉」的祝福出现的概率',
    ver: '3.1',
    icon: '1021',
    type: 1,
  },
  {
    _id: 8042,
    name: '闪耀的偏方三八面骰',
    desc: '获得该奇物后将当前持有的包含该奇物在内的所有奇物替换为随机奇物',
    ver: '3.1',
    icon: '1035',
    type: 2,
  },
  {
    _id: 8041,
    name: '分裂金币',
    desc: '每进入下一区域，获得等同于当前持有的宇宙碎片 5% 的宇宙碎片。进入【财富】区域时，将宝箱替换为更好的宝箱',
    ver: '3.1',
    icon: '1015',
    type: 2,
  },
  {
    _id: 8040,
    name: '福灵胶',
    desc: '战斗胜利后选择祝福时，出现的祝福必定是3星的祝福。获得 1 次战斗胜利后，该奇物损毁',
    ver: '3.1',
    icon: '1007',
    type: 2,
  },
  {
    _id: 8039,
    name: '降维骰子',
    desc: '战斗胜利后选择祝福时可以额外选择 1 次祝福，但可选择的祝福选项会减少 1 个。效果触发 2 次后该奇物损毁',
    ver: '3.1',
    icon: '1001',
    type: 2,
  },
  {
    _id: 8038,
    name: '超霸王陀螺',
    desc: '我方目标击破特攻提高 30% 。敌方目标进入战斗时，被削减等同于韧性上限 50% 的韧性，该效果不会击破敌方目标弱点',
    ver: '3.1',
    icon: '1116',
    type: 1,
  },
  {
    _id: 8037,
    name: '埋点土',
    desc: '获得 3 / 6 / 9 场战斗胜利后，获得 50 / 150 / 250 宇宙碎片。获得 9 场战斗胜利后，该奇物损毁',
    ver: '3.1',
    icon: '1123',
    type: 1,
  },
  {
    _id: 8036,
    name: '有梦 -0110 ',
    desc: '进入战斗时，我方全体造成的伤害提高 50% ， 15 回合后，受到的伤害提高 10% ',
    ver: '3.1',
    icon: '1133',
    type: 1,
  },
  {
    _id: 8035,
    name: '水上书',
    desc: '进入区域时，我方全体回复全部生命值、能量值与秘技点，并重置所有陷入无法战斗状态的角色',
    ver: '3.1',
    icon: '1130',
    type: 2,
  },
  {
    _id: 8034,
    name: '朋克洛德平衡',
    desc: '敌方目标进入战斗时，受到等同于各自生命上限 99% 的固定数值的伤害，【首领】和【转化】区域无效。获得 2 场战斗胜利后，该奇物损毁',
    ver: '3.1',
    icon: '1126',
    type: 1,
  },
  {
    _id: 8033,
    name: '朋克洛德精神',
    desc: '进入战斗时，有 100% 固定概率为敌方全体添加 1 个场上我方目标持有属性的弱点，持续 10 回合',
    ver: '3.1',
    icon: '1048',
    type: 1,
  },
  {
    _id: 8032,
    name: '信标着色剂',
    desc: '战斗胜利后，选择祝福时，随机强化其中 1 个祝福',
    ver: '3.1',
    icon: '1036',
    type: 1,
  },
  {
    _id: 8031,
    name: '天彗合金Ⅰ型',
    desc: '无效果，同时最多持有一个',
    ver: '3.1',
    icon: '1109',
    type: 1,
  },
  {
    _id: 8030,
    name: '天彗合金',
    desc: '获得该奇物时，立即获得奇物【天彗合金Ⅰ型】、【天彗合金Ⅱ型】和【天彗合金Ⅲ型】',
    ver: '3.1',
    icon: '1109',
    type: 1,
  },
  {
    _id: 8029,
    name: '挣扎的色彩',
    desc: '进入区域时，额外战利品的出现概率提高，且固定为混沌药箱',
    ver: '3.1',
    icon: '1099',
    type: 1,
  },
  {
    _id: 8028,
    name: '临时赌资',
    desc: '立即获得 300 宇宙碎片，累计进入 5 个区域后，该奇物损毁，并失去 450 宇宙碎片',
    ver: '3.1',
    icon: '1087',
    type: 1,
  },
  {
    _id: 8027,
    name: '断骨剑',
    desc: '在第一、二位面中，我方全体受到的伤害提高 20% ，在第三位面中，我方全体受到的伤害降低 12% ',
    ver: '3.1',
    icon: '1085',
    type: 1,
  },
  {
    _id: 8026,
    name: '自我意识的舒张压',
    desc: '进入战斗时会进入自动战斗状态且无法解除。我方全体造成的伤害提高 30% ，生命上限提高 30% ',
    ver: '3.1',
    icon: '1100',
    type: 1,
  },
  {
    _id: 8025,
    name: '猜不透匣',
    desc: '战斗胜利后获得的祝福，至少有1个与方程所需的命途相同',
    ver: '3.1',
    icon: '1037',
    type: 2,
  },
  {
    _id: 8024,
    name: '「楼梯上的水母」',
    desc: '失去所有祝福，并按照失去祝福的星级之和获得宇宙碎片，每有1个星级获得 100 宇宙碎片',
    ver: '3.1',
    icon: '1081',
    type: 2,
  },
  {
    _id: 8023,
    name: '和平的代价',
    desc: '进入【商店】区域时，获得 150 宇宙碎片',
    ver: '3.1',
    icon: '1074',
    type: 1,
  },
  {
    _id: 8022,
    name: '许愿星',
    desc: '【冒险】区域的出现概率大幅提高。携带该奇物进入【冒险】区域后，使得该区域的限制时间提高 50% ，并在进入区域时额外获得一个宝箱，效果触发 2 次后该奇物损毁',
    ver: '3.1',
    icon: '1042',
    type: 2,
  },
  {
    _id: 8021,
    name: '粉红冲撞',
    desc: '每拥有1种不同命途的祝福，所有角色击破特攻提高 20% ',
    ver: '3.1',
    icon: '1060',
    type: 1,
  },
  {
    _id: 8020,
    name: '塔拉毒火焰',
    desc: '进入战斗时，使当前攻击力最高的我方目标，每回合开始时消耗等同于生命上限 24% 的生命值。同时使其速度提高 5% ，速度提高的效果最多叠加 5 次',
    ver: '3.1',
    icon: '1062',
    type: 1,
  },
  {
    _id: 8019,
    name: '邪恶机械卫星#900',
    desc: '商品价格降低 30% ',
    ver: '3.1',
    icon: '1050',
    type: 2,
  },
  {
    _id: 8018,
    name: '鲁珀特帝国机械活塞',
    desc: '每次进入区域时，获得 2 个随机奇物，有可能是负面奇物，并失去 1 个随机奇物。若通过该方式将自身丢弃，失去所有奇物。获得该奇物时，若同时携带全部鲁珀特帝国机械系列奇物，将引发反有机方程的局域共鸣',
    ver: '3.1',
    icon: '1090',
    type: 1,
  },
  {
    _id: 8017,
    name: '鲁珀特帝国机械杠杆',
    desc: '每次进入区域时，获得 1 个方程所需的随机祝福，随机失去 1 个方程不需要的祝福，若没有祝福可以通过该方式失去，该奇物损毁。获得该奇物时，若同时携带全部鲁珀特帝国机械系列奇物，将引发反有机方程的局域共鸣',
    ver: '3.1',
    icon: '1089',
    type: 1,
  },
  {
    _id: 8016,
    name: '鲁珀特帝国机械齿轮',
    desc: '每次进入区域时，获得 50 宇宙碎片，如果此时宇宙碎片超过 750 ，该奇物损毁，并失去所有宇宙碎片。获得该奇物时，若同时携带全部鲁珀特帝国机械系列奇物，将引发反有机方程的局域共鸣',
    ver: '3.1',
    icon: '1070',
    type: 1,
  },
  {
    _id: 8015,
    name: '万识囊',
    desc: '可破坏物会更频繁地出现，且被击碎后获得的收益翻倍',
    ver: '3.1',
    icon: '1030',
    type: 1,
  },
  {
    _id: 8014,
    name: '换境桂冠',
    desc: '若在与非最终区域中的敌人的战斗中失败，不会导致本次探索中断，而会视为本次战斗胜利并使所有角色的当前生命值回复至各自的生命上限。效果触发 1 次后该奇物损毁',
    ver: '3.1',
    icon: '1032',
    type: 1,
  },
  {
    _id: 8013,
    name: '天使型谢债发行机',
    desc: '战斗胜利后，无法获得宇宙碎片。效果触发 5 次后该奇物损毁并使当前拥有的宇宙碎片数量翻倍',
    ver: '3.1',
    icon: '1044',
    type: 1,
  },
  {
    _id: 8012,
    name: '虫网',
    desc: '进入战斗时，使当前攻击力最高的我方目标陷入【寄生】状态。【寄生】状态下，我方目标的攻击力提高 50% ，但在回合开始时会消耗等同于当前生命值 20% 的生命值。当陷入无法战斗状态后，该状态将转移给随机其他我方目标',
    ver: '3.1',
    icon: '1019',
    type: 1,
  },
  {
    _id: 8011,
    name: '万象无常骰',
    desc: '获得该奇物后立即随机强化 2 个祝福',
    ver: '3.1',
    icon: '1034',
    type: 1,
  },
  {
    _id: 8010,
    name: '天外重声大碟',
    desc: '进入战斗时，所有我方目标可抵抗除持续伤害外的所有伤害，受到攻击后解除，并在 3 回合内不会陷入负面效果',
    ver: '3.1',
    icon: '1031',
    type: 1,
  },
  {
    _id: 8009,
    name: '空无烛剪',
    desc: '获得该奇物后将随机修复最多 2 个已损毁的1-3星奇物，使其效果的剩余次数恢复至初始状态',
    ver: '3.1',
    icon: '1017',
    type: 2,
  },
  {
    _id: 8008,
    name: '信仰债券',
    desc: '覆写祝福、覆写方程以及复活陷入无法战斗状态的角色所需的宇宙碎片数量降低 30% ',
    ver: '3.1',
    icon: '1013',
    type: 2,
  },
  {
    _id: 8007,
    name: '俱乐部券',
    desc: '战斗胜利后获得宇宙碎片的数量提高 50% ',
    ver: '3.1',
    icon: '1012',
    type: 1,
  },
  {
    _id: 8006,
    name: '博士之袍',
    desc: '进入战斗时，若拥有已展开的3星方程，使所有角色激活终结技，并使造成的伤害提高 25% ',
    ver: '3.1',
    icon: '1011',
    type: 1,
  },
  {
    _id: 8005,
    name: '永不停嘴的羊皮卷',
    desc: '进入战斗时，敌方全体受到等同于各自生命上限 30% 的固定数值的伤害',
    ver: '3.1',
    icon: '1008',
    type: 1,
  },
  {
    _id: 8004,
    name: '香涎干酪',
    desc: '战斗胜利后，我方全体回复等同于各自生命上限 100% 的生命值，效果触发3.0次后该奇物升级为「海绵王」',
    ver: '3.1',
    icon: '1006',
    type: 1,
  },
  {
    _id: 8003,
    name: '测不准匣',
    desc: '获得该奇物后立即获得 1 - 2 个随机祝福，展开 2 个方程后，该奇物升级为「猜不透匣」',
    ver: '3.1',
    icon: '1005',
    type: 1,
  },
  {
    _id: 8002,
    name: '异木果实',
    desc: '我方全体效果抵抗提高 30% ，生命上限降低 20% 。战斗胜利 3 次后该奇物升级为「腐化异木果实」',
    ver: '3.1',
    icon: '1004',
    type: 1,
  },
  {
    _id: 8001,
    name: '跃迁复眼',
    desc: '战斗胜利后选择祝福时，强化所有出现的品质为1星的祝福',
    ver: '3.1',
    icon: '1003',
    type: 1,
  },
]

const PARTITIONED_CURIOS = partitionAllCurios(CURIOS)

export { CURIOS, PARTITIONED_CURIOS }
