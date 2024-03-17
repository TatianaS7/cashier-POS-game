import random
from pos_data import pos_system


name_list = pos_system['names']
entrees_list = pos_system['menu_items']['entrees']
sides_list = pos_system['menu_items']['sides']
beverages_list = pos_system['menu_items']['beverages']
desserts_list = pos_system['menu_items']['desserts']


def main():
    customer_name = random.choice(name_list)
    num_guests = random.randint(1, 4)

    entree_order = []
    for i in range(num_guests):
       entree_item = random.choice(entrees_list)
       entree_order.append(entree_item['item'])

    side_order = []
    for i in range(num_guests):
        side_item = random.choice(sides_list)
        side_order.append(side_item['item'])

    beverage_order = []
    for i in range(num_guests):
        bev_item = random.choice(beverages_list)
        beverage_order.append(bev_item['item'])

    dessert_order = []
    for i in range(num_guests):
        dessert_item = random.choice(desserts_list)
        dessert_order.append(dessert_item['item'])    

    full_order = {
        'customer': customer_name,
        'covers': num_guests,
        'order': {
            'entrees': entree_order,
            'sides': side_order,
            'beverages': beverage_order,
            'desserts': dessert_order
        }
    }    

    print(full_order)

main()