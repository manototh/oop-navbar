abstract class NavBarParentItem {
    RenderChildItems(navBarItems: NavBarItem[]): HTMLElement[] {
        let renderedChildItems: HTMLElement[] = [];
        navBarItems.forEach(navBarItem => {
            if (navBarItem.GetParent() === this) {
                renderedChildItems.push(navBarItem.Render(navBarItems));
            }
        })
        return renderedChildItems;
    }
}

class NavBarItem extends NavBarParentItem {
    private parent: NavBarParentItem;
    private text: string;

    constructor(parent: NavBarParentItem, text: string) {
        super();
        this.parent = parent;
        this.text = text;
    }

    GetParent(): NavBarParentItem {
        return this.parent;
    }

    CreateElement(elementType: string): HTMLElement {
        let element = document.createElement(elementType);
        return element;
    }

    CreateAnchorElement(): HTMLAnchorElement {
        return this.CreateElement('a') as HTMLAnchorElement;
    }

    ConfigureAnchor(anchor: HTMLAnchorElement, text: string) {
        anchor.innerText = text;
    }

    AppendChildItems(renderedNavBarItem: HTMLElement, childItems: HTMLElement[]) {
        if (childItems.length > 0) {
            let newMenu = document.createElement("ul");
            newMenu.setAttribute("class", "menu vertical");
            childItems.forEach(childItem => {
                newMenu.append(childItem);
            });
            renderedNavBarItem.append(newMenu);
        }
    }

    Render(navBarItems: NavBarItem[]): HTMLElement {
        let renderedNavBarItem = this.CreateElement("li");
        let anchor = this.CreateAnchorElement();
        this.ConfigureAnchor(anchor, this.text);
        let childItems = this.RenderChildItems(navBarItems);

        renderedNavBarItem.append(anchor);
        this.AppendChildItems(renderedNavBarItem, childItems);

        return renderedNavBarItem;
    }
}

class NavBar extends NavBarParentItem {
    private title: string;
    private navBarItems!: NavBarItem[];

    constructor(title: string) {
        super();
        this.title = title;
    }

    SetItems(navBarItems: NavBarItem[]): void {
        this.navBarItems = navBarItems;
    }

    CreateTopBar() {
        let topBar = document.createElement("div");
        topBar.setAttribute("class", "top-bar");
        return topBar;
    }

    CreateTopBarLeft() {
        let topBarLeft = document.createElement("div");
        topBarLeft.setAttribute("class", "top-bar-left");
        return topBarLeft;
    }

    CreateDropdown() {
        let dropdown = document.createElement("ul");
        dropdown.setAttribute("class", "dropdown menu");
        dropdown.setAttribute("data-dropdown-menu", "data-dropdown-menu");
        return dropdown;
    }

    CreateMenuText(title: string) {
        let menuText = document.createElement("li");
        menuText.setAttribute("class", "menu-text");
        menuText.innerText = title;
        return menuText;
    }

    AppendChildItems(dropdown: HTMLElement, childItems: HTMLElement[]) {
        if (childItems) {
            childItems.forEach(childItem => {
                dropdown.append(childItem);
            });
        }
    }

    Render(): HTMLElement {
        let topBar = this.CreateTopBar();
        let topBarLeft = this.CreateTopBarLeft();
        let dropdown = this.CreateDropdown();
        let menuText = this.CreateMenuText(this.title);
        let childItems = this.RenderChildItems(this.navBarItems);

        topBar.append(topBarLeft);
        topBarLeft.append(dropdown);
        dropdown.append(menuText);

        this.AppendChildItems(dropdown, childItems);

        return topBar;
    }
}

//Specify the properties and the items of the navigation bar. See the example below, and replace it with your own code.
let navBar = new NavBar("OOP Navigation Bar");
let home = new NavBarItem(navBar, "Home");
let shop = new NavBarItem(navBar, "Shop");
let about = new NavBarItem(navBar, "About");
let email = new NavBarItem(about, "Email");
let phone = new NavBarItem(about, "Phone");
let address = new NavBarItem(about, "Address");
let homeAddress = new NavBarItem(address, "Home Address");
let workAddress = new NavBarItem(address, "Work Address");
let otherAddress = new NavBarItem(address, "Other Address");
navBar.SetItems([home, shop, about, email, phone, address, homeAddress, workAddress, otherAddress]);

//Render the navigation bar and add it to the DOM. See the example below, and replace it with your own code.
document.querySelector("#navbar")?.append(navBar.Render());