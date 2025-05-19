import json5

def merge_blessings():
    with open("todo_merge/blessings_new.json5", 'r') as fnew, \
        open("todo_merge/blessings_old.json5", 'r') as fold, \
        open('todo_merge/blessings_merged.json5', 'w') as fout:
            jnew = json5.load(fnew)
            jold = json5.load(fold)

            jnew_id = set(map(lambda x: x['_id'], jnew))
            jold_id = set(map(lambda x: x['_id'], jold))

            print(jnew_id.difference(jold_id))

            for i in range(len(jold)):
                new_desc = jnew[i]['Desc']  # 保证排好序
                jold[i]['Desc'] = new_desc

            json5.dump(jold, fout, ensure_ascii=False, indent=2)

def merge_equation():
    with open('todo_merge/equations_new.json5', 'r') as fnew, \
        open('todo_merge/equations_old.json5', 'r') as fold, \
        open('todo_merge/equations_merged.json5', 'w') as fout:
            jnew: list = json5.load(fnew)
            jold: list = json5.load(fold)

            jold_id_list = list(map(lambda x: x['Name'], jold))

            jnew = sorted(jnew, key=lambda x: x['Name'])
            jold = sorted(jold, key=lambda x: x['Name'])

            jnew_id = set(map(lambda x: x['Name'], jnew))
            jold_id = set(map(lambda x: x['Name'], jold))

            print(jnew_id.difference(jold_id))

            # for i in range(len(jold)):
            #     assert jold[i]['Name'] == jnew[i]['Name']
            #     jold[i]['Desc'] = jnew[i]['Desc'][0]
            #     jold[i]['_id'] = jnew[i]['_id']

            # jold = sorted(jold, key=lambda x: x['_id'])
            # json5.dump(jold, fout, ensure_ascii=False, indent=2)
            print(len(jnew))
            for j in jnew:
                if j['Name'] not in jold_id:
                    j['rel'] = []
                else:
                    print(j['Name'])
                    correspond = None
                    for k in jold:
                        if k['Name'] == j['Name']:
                            correspond = k
                            break
                    print(correspond)
                    j['rel'] = correspond['rel']
                del j['Story']
                del j['Star']
                j['Type'] = 'BuffType.Equation'
                j['er'] = sum(j['Need'].values()) if sum(j['Need'].values()) != 10 else 8
                j['Desc'] = j['Desc'][0]
                # break

            jnew = sorted(jnew, key=lambda x: x['_id'])
            json5.dump(jnew, fout, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    merge_equation()
    # merge_blessings()
