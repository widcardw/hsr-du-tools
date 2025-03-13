import json5

def merge_blessings():
    with open("_todo_merge/blessings_new.json5", 'r') as fnew, \
        open("_todo_merge/blessings_old.json5", 'r') as fold, \
        open('_todo_merge/blessings_merged.json5', 'w') as fout:
            jnew = json5.load(fnew)
            jold = json5.load(fold)

            jnew_id = set(map(lambda x: x['_id'], jnew))
            jold_id = set(map(lambda x: x['_id'], jold))

            print(jold_id.difference(jnew_id))

            for i in range(len(jold)):
                new_desc = jnew[i]['Desc']  # 保证排好序
                jold[i]['Desc'] = new_desc

            json5.dump(jold, fout, ensure_ascii=False, indent=2)

def merge_equation():
    with open('_todo_merge/equation_new.json5', 'r') as fnew, \
        open('_todo_merge/equation_old.json5', 'r') as fold, \
        open('_todo_merge/equation_merged.json5', 'w') as fout:
            jnew: list = json5.load(fnew)
            jold: list = json5.load(fold)

            # jnew_1 = sorted(jnew, key=lambda x: x['_id'])
            # jold_1 = sorted(jold, key=lambda x: x['_id'])

            # assert(list(map(lambda x: x['_id'], jold))==list(map(lambda x: x['_id'], jold_1)))
            # assert(list(map(lambda x: x['_id'], jnew))==list(map(lambda x: x['_id'], jnew_1)))

            for i in range(len(jold)):
                jold[i]['Desc'] = jnew[i]['Desc'][0]

            json5.dump(jold, fout, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    merge_equation()
