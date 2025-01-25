# 差分宇宙 模拟工具

> 本工具仅用于学习交流，一切以正式服上线数据为准。

[网站跳转](https://du.widcard.win)

## 功能

- 搜索具有相关性的方程和祝福
- 查看所有祝福（静态）
- 查看所有方程（静态）
- 查看所有奇物（静态）
- 推荐方程组合（静态）

## 贡献

### 方程和祝福 Tag 标注

由于本项目中，方程和祝福的文本信息并非爬取自官方渠道，且方程和祝福下方的所有 tag 均为手动标注，难免会有一些错误。欢迎提交 Issue 或 PR 进行修正。

<details>
<summary>如何标注 Tag</summary>

1. 所有 tag 信息在 `src/pages/vx.y/_data/constants.ts` 或 `gains.ts` 中，以 `GainType` 这个枚举类来表示，`GAIN_MAP` 有中文标注，注意不要占用 120-150 的位置，这些是用于标注命途的。~~希望不要吐槽我英语差~~
2. 所有祝福的信息存储在 `src/pages/vx.y/_data/blessings.ts` 中，`rel` 属性表示相关的 tag，在该列表中添加或修改 `GainType.<X>` 即可完成 tag 的标注。
3. 所有方程的信息存储在 `src/pages/vx.y/_data/equations.ts` 中，`rel` 属性表示相关的 tag，在该列表中添加或修改 `GainType.<X>` 即可完成 tag 的标注。~~我到后来才知道方程应该翻译成 formula，不高兴改了~~
</details>

### 推荐阵容投稿

欢迎投稿推荐的方程和祝福的组合。可在 [disscussion](https://github.com/widcardw/hsr-du-tools/discussions) 页面进行投稿，建议附上推荐理由，优秀的投稿将会被采纳并写入到推荐列表中。

### BUG 反馈

请到 [issues](https://github.com/widcardw/hsr-du-tools/issues) 页面进行反馈，附上**详细的错误信息**或者
**详细的复现流程**，方便开发者进行修复。

### 跟随游戏版本更新

由于数据并非取自官方渠道，且开发者并不一定时间实时更新，欢迎**为爱发电**的小伙伴参与开发。

## LICENSE

Unlicensed
