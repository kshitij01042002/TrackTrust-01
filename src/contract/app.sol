// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract app {
    address public Owner;

    constructor() {
        Owner = payable(msg.sender);
    }

    modifier onlyByOwner() {
        require(msg.sender == Owner);
        _;
    }

    enum STAGE {
        Manufacture_In,
        Ordered,
        Manufacture_Out,
        Warehouse_In,
        Warehouse_Out,
        Retailer_In,
        Retailer_Out,
        Delivered
    }

    uint public ProductId = 0;
    // uint256 public Manufacture_Id = 0;
    // uint256 public Warehouse_Id = 0;
    // uint256 public Retailer_Id = 0;

    struct Product {
        uint id;
        string name;
        string description;
        uint price;
        string[] from;
        string[] location;
        uint[] time;
        address manufacture_address;
        address buyer;
        bool delivered;
        STAGE stage;
    }

    Product[] public Product_Array;

    struct Manufacture {
        string name;
        address manufacture_address;
        string location;
    }

    address[] public Manufacture_Address_Array;  

    mapping(address => Manufacture) public Manufacture_Array;

    struct Warehouse {
        string name;
        address warehouse_address;
        string location;
    }

    address[] public Warehouse_Address_Array;

    mapping(address => Warehouse) public Warehouse_Array;

    struct Retailer {
        string name;
        address retailer_address;
        string location;
    }

    address[] public Retailer_Address_Array;

    mapping(address => Retailer) public Retailer_Array;

    function addManufacture(
        address _address,
        string memory _name,
        string memory _place
    ) public onlyByOwner() {
        Manufacture memory manufacture;
        manufacture.name = _name;
        manufacture.manufacture_address = payable(_address);
        manufacture.location = _place;
        Manufacture_Array[_address] = manufacture;
        Manufacture_Address_Array.push(_address);
    }

    function addWarehouse(
        address _address,
        string memory _name,
        string memory _place
    ) public onlyByOwner () {
        Warehouse memory warehouse;
        warehouse.name = _name;
        warehouse.warehouse_address = payable(_address);
        warehouse.location = _place;
        Warehouse_Array[_address] = warehouse;
        Warehouse_Address_Array.push(_address);
    }

    function addRetailer(
        address _address,
        string memory _name,
        string memory _place
    ) public onlyByOwner() {
        Retailer memory retailer;
        retailer.name = _name;
        retailer.retailer_address = payable(_address);
        retailer.location = _place;
        Retailer_Array[_address] = retailer;
        Retailer_Address_Array.push(_address);
    }

    function addProduct(
        string memory name,
        string memory description,
        uint price
    ) public {
        require(Manufacture_Array[msg.sender].manufacture_address == msg.sender, "Only valid Manufacture can add products");
        Product memory product;
        product.id = ProductId;
        product.name = name;
        product.description = description;
        product.price = price;
        product.stage = STAGE.Manufacture_In;
        product.manufacture_address = payable(msg.sender);
        Product_Array.push(product);
        Product_Array[ProductId].from.push("Manufacture In");
        Product_Array[ProductId].location.push(Manufacture_Array[msg.sender].location);
        Product_Array[ProductId].time.push(block.timestamp);
        ProductId++;
    }

    function getAllProducts() public view returns (Product[] memory) {
        return Product_Array;
    }

    function getProduct(uint _id) public view returns (string[] memory, string[] memory, uint[] memory) {
        return (Product_Array[_id].from, Product_Array[_id].location, Product_Array[_id].time);
    }

    function buy(uint _productId) payable public {
        require(
            Product_Array[_productId].price == msg.value,
            "Pay the exact price"
        );
        require(
            Product_Array[_productId].manufacture_address != msg.sender,
            "Seller cannot buy"
        );
        Product_Array[_productId].buyer = msg.sender;
        Product_Array[_productId].stage = STAGE.Ordered;
    }

    function delivery(uint _productId) public {
        require(
            Product_Array[_productId].buyer == msg.sender,
            "Only the buyer can confirm"
        );
        Product_Array[_productId].delivered = true;
        payable(Product_Array[_productId].manufacture_address).transfer(Product_Array[_productId].price);
    }

    function updateStagetoWarehouse(uint[] memory numbers) public {
        for (uint i = 0; i < numbers.length; i++) {
            Product_Array[numbers[i]].stage = STAGE.Manufacture_Out;
            Product_Array[numbers[i]].from.push("Manufacturer Out");
            Product_Array[numbers[i]].time.push(block.timestamp);
            Product_Array[numbers[i]].location.push(Manufacture_Array[msg.sender].location);
        }
    }

    function updateStagetoWarehouseIn(uint[] memory numbers) public {
        for (uint i = 0; i < numbers.length; i++) {
            Product_Array[numbers[i]].stage = STAGE.Warehouse_In;
            Product_Array[numbers[i]].from.push("Warehouse In");
            Product_Array[numbers[i]].time.push(block.timestamp);
            Product_Array[numbers[i]].location.push(Warehouse_Array[msg.sender].location);
        }
    }

    function updateStagetoWarehouseOut(uint[] memory numbers) public {
        for (uint i = 0; i < numbers.length; i++) {
            Product_Array[numbers[i]].stage = STAGE.Warehouse_Out;
            Product_Array[numbers[i]].from.push("Warehouse Out");
            Product_Array[numbers[i]].time.push(block.timestamp);
            Product_Array[numbers[i]].location.push(Warehouse_Array[msg.sender].location);
        }
    }

    function updateStagetoRetailerIn(uint[] memory numbers) public {
        for (uint i = 0; i < numbers.length; i++) {
            Product_Array[numbers[i]].stage = STAGE.Retailer_In;
            Product_Array[numbers[i]].from.push("Retailer In");
            Product_Array[numbers[i]].time.push(block.timestamp);
            Product_Array[numbers[i]].location.push(Retailer_Array[msg.sender].location);
        }
    }

    function updateStagetoRetailerOut(uint[] memory numbers) public {
        for (uint i = 0; i < numbers.length; i++) {
            Product_Array[numbers[i]].stage = STAGE.Retailer_Out;
            Product_Array[numbers[i]].from.push("Retailer Out");
            Product_Array[numbers[i]].time.push(block.timestamp);
            Product_Array[numbers[i]].location.push(Retailer_Array[msg.sender].location);
        }
    }

    function getUserRole(address _address) public view returns (string memory) {
        if (Manufacture_Array[_address].manufacture_address == _address) {
            return "Manufacturer";
        } else if (Warehouse_Array[_address].warehouse_address == _address) {
            return "Warehouse";
        } else if (Retailer_Array[_address].retailer_address == _address) {
            return "Retailer";
        } else {
            return "Customer";
        }
    }

    function getAllManufacturers() public view returns (Manufacture[] memory) {
        uint manufacturerCount = Manufacture_Address_Array.length;
        Manufacture[] memory manufacturers = new Manufacture[](manufacturerCount);

        for (uint i = 0; i < manufacturerCount; i++) {
            address manufacturerAddress = Manufacture_Address_Array[i];
            manufacturers[i] = Manufacture_Array[manufacturerAddress];
        }

        return manufacturers;
    }
}