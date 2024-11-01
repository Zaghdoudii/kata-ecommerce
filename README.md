# Mini E-commerce Product Gallery Frontend Kata

**Deployment Link**: [https://zaghdoudii.github.io/kata-ecommerce/products](https://zaghdoudii.github.io/kata-ecommerce/products)

## Overview
This project is a frontend application aimed at providing a user-friendly interface for browsing and purchasing products. It utilizes Angular v16.0.0, Node v18.12.0, Typescript v5.0.2, and Bootstrap v5.3.3

## Features
- **Product Listing:** Users can view a comprehensive list of products to facilitate their purchasing decisions.
- **Shopping Cart Management:** Customers can add products, view selected items, adjust quantities, and remove items from their shopping carts.
- **Payment Form:** Integration of a payment form where customers can enter their payment information.
- **Product Search:** Ability to search for products by their names.
- **Product Filtering:** Users can filter products by category.

## Application Criteria
The application adheres to the following criteria:
- **Responsive Design:** The application is responsive across various devices.
- **Simple and Engaging Design:** The interface is designed to be straightforward and visually appealing.

## Getting Started
To run the application, follow these steps:
1. Clone the project either in zip format or by using the following command in the terminal:
    ```
    git clone https://github.com/Zaghdoudii/kata-ecommerce
    ```
2. Navigate to the project directory.
3. Build the Docker image for the application using the following command in the terminal:
    ```
    docker build -t kata-ecommerce .
    ```
4. To start the application, enter the following command in the terminal:
    ```
    docker run -p 8080:80 kata-ecommerce
    ```
5. Access http://localhost:8080 in your preferred web browser.

## Deployment on GitHub Pages
To deploy this Angular application on GitHub Pages, follow these steps:
1. **Check angular.json Configuration**:
In the `angular.json` file, ensure that the outputPath under "architect": { "build": { "options": {"outputPath": ... } } matches docs to ensure the build is correctly directed.

2. **Build the Project for GitHub Pages**:
   Run the following command to build the project and specify the output path (`docs`) and base URL (`/kata-ecommerce/`), which should match your repository name:
   ```
   ng build --output-path docs --base-href /kata-ecommerce/
   ```
3. **Push to GitHub**:
Commit and push the changes to your GitHub repository. Once the docs folder is pushed, GitHub Pages will recognize it.

5. **Activate GitHub Pages**:
Go to your GitHub repository's settings, find the GitHub Pages section, and set the source to the docs folder.

**The application should now be available at : https://<username>.github.io/kata-ecommerce**

## Contributor
[Zaghdoudi Mohamed](mailto:zaghdouudi@gmail.com)
