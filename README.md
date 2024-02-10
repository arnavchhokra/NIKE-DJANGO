# NikeDjango

NikeDjango is a full-stack e-commerce application developed using Django for the backend and Next.js for the frontend. It provides a seamless shopping experience for users while offering robust management capabilities for administrators.

## Project Structure

The project structure is organized into two main folders:

1. **backend**: Contains all Django-related files and configurations.
2. **frontend**: Contains all Next.js-related files and configurations.

### Backend

The backend folder contains all the necessary files and configurations for the Django backend. It includes:

- **API endpoints**: Define routes and handlers for various API requests.
- **Models**: Define database models for products, users, orders, etc.
- **Views**: Define views for rendering HTML templates or handling API requests.
- **Settings**: Configuration settings for Django project.
- **URLs**: Define URL patterns for routing requests to appropriate views.

### Frontend

The frontend folder contains all the necessary files and configurations for the Next.js frontend. It includes:

- **Pages**: Define pages for different sections of the application.
- **Components**: Reusable UI components used across different pages.
- **Layouts**: Define layout components for consistent page structure.
- **Styles**: Styling files for customizing the appearance of the application.
- **API**: Define API functions for fetching data from the backend.

## Getting Started

To get started with NikeDjango, follow these steps:

1. Clone the repository:

```
git clone https://github.com/arnavchhokra/NIKE-DJANGO.git
```

2. Navigate to the frontend folder:

```
cd Jord/frontend
```

3. Install dependencies for the frontend:

```
npm install
```

4. Start the frontend server:

```
npm run dev
```

5. Open a new terminal and navigate to the backend folder:

```
cd ../backend
```


7. Activate the virtual environment:

- For Windows:

```
.\env\Scripts\activate
```

- For macOS/Linux:

```
source env/bin/activate
```

8. Install dependencies for the backend:

```
pip install -r requirements.txt
```

9. Run migrations to create the database schema:

```
python manage.py migrate
```

10. Start the backend server:

```
python manage.py runserver
```

11. Open your web browser and visit http://localhost:3000 to access the NikeDjango application.

## Contributing

Contributions to NikeDjango are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the Django and Next.js communities for providing excellent frameworks and documentation.
- Special thanks to Nike for inspiring the project name and theme!
