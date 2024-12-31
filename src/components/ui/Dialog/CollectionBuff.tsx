import clsx from 'clsx'
import { DialogTrigger, Dialog } from './index'

interface CollectionItem {
  name: string
  buff: string
  image: string
}

const collections: CollectionItem[] = [
  {
    name: '庸者的前路',
    buff: '于概率艺术馆布设后，在差分宇宙中，初始获得的宇宙碎片数量提高20',
    image: 'IconRogueTournCollection_TournMedal.webp',
  },
  {
    name: '真理医生·定制款',
    buff: '于概率艺术馆布设后，在差分宇宙的造物调试台中，覆写方程所需的宇宙碎片降低10',
    image: 'IconRogueTournCollection_DrRatioPigeon.webp',
  },
  {
    name: '求索的终尽',
    buff: '于概率艺术馆布设后，在差分宇宙第一未变的造物调试台中，可用于祝福强化的热量增加1点',
    image: 'IconRogueTournCollection_HertaScepter.webp',
  },
  {
    name: '黑塔·典藏版',
    buff: '于概率艺术馆布设后，在差分宇宙的【商店】区域中，奇物商店会增加1个可购买的奇物',
    image: 'IconRogueTournCollection_HertaPigeon.webp',
  },
  {
    name: '觐见之骰·存护',
    buff: '差分宇宙中角色获得的护盾量提高2%',
    image: 'dice_knight.webp',
  },
  {
    name: '觐见之骰·记忆',
    buff: '差分宇宙中角色的效果命中提高4%',
    image: 'dice_memory.webp',
  },
  {
    name: '觐见之骰·丰饶',
    buff: '差分宇宙中角色的回复量提高2%',
    image: 'dice_priest.webp',
  },
  {
    name: '觐见之骰·毁灭',
    buff: '差分宇宙中角色的伤害提高2%',
    image: 'dice_warlock.webp',
  },
  {
    name: '觐见之骰·繁育',
    buff: '差分宇宙中角色的普攻伤害提高3%',
    image: 'dice_propagation.webp',
  },
  {
    name: '觐见之骰·虚无',
    buff: '差分宇宙中角色造成的持续伤害提高3%',
    image: 'dice_warrior.webp',
  },
  {
    name: '觐见之骰·巡猎',
    buff: '差分宇宙中角色的暴击伤害提高3%',
    image: 'dice_hunt.webp',
  },
  {
    name: '觐见之骰·欢愉',
    buff: '差分宇宙中角色造成的追加攻击伤害提高3%',
    image: 'dice_joy.webp',
  },
  {
    name: '信标·自定义骰',
    buff: '差分宇宙中角色造成的终结技伤害提高3%',
    image: 'dice_beacon.webp',
  },
  {
    name: '区域·自定义骰',
    buff: '差分宇宙中角色的攻击力提高2%',
    image: 'dice_area.webp',
  },
  {
    name: '知识·自定义骰',
    buff: '差分宇宙中角色的防御力提高2%',
    image: 'dice_knowledge.webp',
  },
  {
    name: '异质·自定义骰',
    buff: '差分宇宙中角色的生命上限提高2%',
    image: 'dice_hetero.webp',
  },
]

const CollectionBuffDialog = () => {
  return (
    <>
      <Dialog
        class="max-w-[800px] max-h-[800px]"
        trigger={
          <DialogTrigger variant="ghost" size="small">
            <div class="i-carbon-search" />
          </DialogTrigger>
        }
      >
        <h2 class="text-fg">加成总览</h2>
        {collections.map((i) => (
          <div
            class={clsx(
              'border-b border-b-solid border-b-bg-tertiary',
              'flex gap-4',
              'py-2',
            )}
          >
            <div class="flex items-center">
              <img
                src={`/collection/${i.image}`}
                alt={i.name}
                class="w-5rem h-5rem"
                loading='lazy'
              />
            </div>
            <div>
              <div class="text-lg text-fg font-bold">{i.name}</div>
              <div class="text-fg-secondary">{i.buff}</div>
            </div>
          </div>
        ))}
      </Dialog>
    </>
  )
}

export default CollectionBuffDialog
