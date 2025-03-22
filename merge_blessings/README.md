# 合并并更新已标注的方程和祝福

> 主要用于对内测数据进行更新

## 安装并使用

```sh
cd merge_blessings
uv install
```

将需要合并的数据分别提取为 json5 的格式，并存放到对应的文件夹中，会用 blessings_new.json5
的 `Desc` 字段覆盖掉 blessings_old.json5 的 `Desc` 字段。

```sh
# ~/divergent-universe/merge_blessings
uv run merge_desc.py
```

而后，将生成出来的 json5 内容覆盖掉先前的数据。
