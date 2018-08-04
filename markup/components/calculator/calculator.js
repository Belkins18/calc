import forEach from '../../static/js/helpers-js/for-each';

export default {
    init() {
        const tabs = document.querySelector('.tabs');
        const tabsGroup = document.querySelector(`.${tabs.className}__group`);
        const tabsGroupItemList = document.querySelectorAll(`.${tabs.className}__item`)

        for (let i = 0; i < tabsGroupItemList.length; i++) {
            if (tabsGroupItemList[i].classList.contains('active')) {
                this.switchContentItems(this.getDataset(tabsGroupItemList[i]));
                this.calcPrice(this.getDataset(tabsGroupItemList[i]));
            }
        }
        this.tabsGroupActiveChange(tabsGroup);
    },

    getDataset(el) {
        return el.dataset.group;
    },

    switchContentItems(dataAttr) {
        const tabsCntItemLand = document.getElementById('land');
        const tabsCntItemPages = document.getElementById('pages');

        switch (dataAttr) {
            case 'land':
                tabsCntItemLand.setAttribute('hidden', false);
                tabsCntItemPages.setAttribute('hidden', true);
                break;
            case 'pages':
                tabsCntItemLand.setAttribute('hidden', true);
                tabsCntItemPages.setAttribute('hidden', false);
                break;
            default:
                console.log( 'Я таких значений не знаю' );
        }
    },

    checkedRemove(id) {
        if (id.checked) {
            id.checked = false;
        }
    },

    calcPrice(dataAttr) {
        const totalValue = document.getElementById('total-value');
        const price = {
            land: 5000,
            pages: 12000,
            cms: 4000,
            changes: 1000,
            section: 500,
            page: 2500
        };
        let total = 5000,
            time = 1,
            hourRate;

        switch (dataAttr) {
            case 'land':
                total = price.land;
                totalValue.value = total;
                break;
            case 'pages':
                total = price.pages;
                totalValue.value = total;
                break;
            default:
                totalValue.value = total;
        }
    },

    tabsGroupActiveChange(selector) {
        const tabsItemSelector = '.tabs__item';
        const itemList = selector.querySelectorAll(tabsItemSelector);
        const checkList = [
            {
                id: document.getElementById('checkbox1'),
            },
            {
                id: document.getElementById('checkbox2')
            }
        ];
        selector.addEventListener('click', (evt) => {
            evt.preventDefault();
            let target = evt.target;
            let tabsItem = target.closest(tabsItemSelector);
            if (!tabsItem) {
                return;
            }
            itemList.forEach(function (item) {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
                tabsItem.classList.add('active');
            });

            this.switchContentItems(this.getDataset(tabsItem));

            for (let i = 0; i < checkList.length; i++) {
                this.checkedRemove(checkList[i].id);
            }

            this.calcPrice(this.getDataset(tabsItem));
        });
    }
};
