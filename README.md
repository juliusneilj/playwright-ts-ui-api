# Playwright TypeScript UI & API Testing Framework

A comprehensive testing framework built with Playwright and TypeScript that supports both UI and API testing with a well-structured architecture.

## 🚀 Features

- **Dual Testing Approach**: Both UI and API testing capabilities
- **TypeScript Support**: Full TypeScript implementation with type safety
- **Cross-Browser Testing**: Support for Chromium, Firefox, and WebKit
- **Page Object Model**: Structured UI testing with page objects and locators
- **API Testing**: Dedicated API testing with base classes and utilities
- **Allure Reporting**: Comprehensive test reporting with Allure
- **Parallel Execution**: Tests run in parallel for faster execution
- **Environment Configuration**: Flexible environment setup with dotenv
- **CI/CD Ready**: Configured for continuous integration

## 📁 Project Structure

```
playwright-ts-ui-api/
├── src/
│   ├── api/                    # API testing modules
│   │   ├── index.ts
│   │   └── pokemon-api.ts      # Pokemon API implementation
│   ├── core/                   # Core base classes
│   │   ├── base-api.ts         # Base API class
│   │   ├── base-page.ts        # Base page class
│   │   └── index.ts
│   ├── fixtures/               # Test fixtures
│   │   ├── base-fixtures.ts
│   │   └── index.ts
│   ├── types/                  # TypeScript type definitions
│   │   ├── api-request.ts
│   │   └── index.ts
│   └── ui/                     # UI testing modules
│       ├── locators/           # Element locators
│       └── pages/              # Page object models
│           ├── login-page.ts
│           └── index.ts
├── tests/
│   ├── api/                    # API test specifications
│   │   └── pokemon-api.spec.ts
│   └── ui/                     # UI test specifications
│       ├── demo-todo-app.spec.ts
│       └── example.spec.ts
├── .github/
│   └── pull_request_template.md
├── allure-report/              # Generated Allure reports
├── allure-results/             # Allure test results
├── coverage/                   # Test coverage reports
├── playwright-report/          # Playwright HTML reports
├── test-results/               # Test execution results
├── .env                        # Environment variables
├── .gitignore
├── package.json
├── playwright.config.ts        # Playwright configuration
└── tsconfig.json              # TypeScript configuration
```

## 🛠️ Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd playwright-ts-ui-api
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env file with your configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
POKEMON_API_BASE_URL=https://pokeapi.co/api/v2/
# Add other environment variables as needed
```

### Playwright Configuration

The project is configured to run tests across multiple browsers and environments:

- **UI Tests**: Run on Chromium, Firefox, and WebKit
- **API Tests**: Run with configurable base URL
- **Parallel Execution**: Enabled for faster test execution
- **Reporting**: Multiple reporters including HTML, Allure, and JUnit

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run UI Tests Only
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run API Tests Only
```bash
npx playwright test --project=api
```

### Run Tests in Headed Mode
```bash
npx playwright test --headed
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Specific Test File
```bash
npx playwright test tests/api/pokemon-api.spec.ts
npx playwright test tests/ui/example.spec.ts
```

## 📊 Test Reporting

### HTML Report
```bash
npx playwright show-report
```

### Allure Report
```bash
npm run allure-generate
```

This will generate and open an Allure report with detailed test results, including:
- Test execution timeline
- Failed test screenshots
- Test step details
- Environment information

## 🏗️ Architecture

### Base Classes

- **BaseAPI**: Foundation for all API testing classes with common HTTP methods
- **BasePage**: Foundation for all page object classes with common page interactions
- **BaseFixtures**: Common test fixtures and setup utilities

### API Testing

The framework includes a structured approach to API testing:

```typescript
// Example: Pokemon API testing
const pokemonAPI = new PokemonAPI();
const response = await pokemonAPI.getPokemonById(36);
expect(response.status()).toEqual(200);
```

### UI Testing

Page Object Model implementation for maintainable UI tests:

```typescript
// Example: Using page objects
const loginPage = new LoginPage(page);
await loginPage.login(username, password);
```

## 🔍 Test Examples

### API Test Example
```typescript
test('Get Pokemon by id', async () => {
    const pokemonAPI = new PokemonAPI();
    const response = await pokemonAPI.getPokemonById(36);
    expect(response.status()).toEqual(200);
});
```

### UI Test Example
```typescript
test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});
```

## 🚀 CI/CD Integration

The project is configured for CI/CD with:

- Retry logic for flaky tests
- Parallel execution optimization
- Multiple report formats (HTML, JUnit, Allure)
- Environment-specific configurations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and add tests
4. Run tests to ensure they pass: `npm test`
5. Commit your changes: `git commit -am 'Add new feature'`
6. Push to the branch: `git push origin feature/new-feature`
7. Submit a pull request

## 📝 Best Practices

- Follow the Page Object Model for UI tests
- Use TypeScript types for better code maintainability
- Write descriptive test names and descriptions
- Keep tests independent and atomic
- Use appropriate wait strategies
- Implement proper error handling
- Maintain consistent code formatting

## 🐛 Troubleshooting

### Common Issues

1. **Browser Installation**: If tests fail to run, ensure browsers are installed:
   ```bash
   npx playwright install
   ```

2. **Environment Variables**: Verify `.env` file is properly configured

3. **Port Conflicts**: Ensure no other services are running on required ports

4. **Dependencies**: Update dependencies if encountering version conflicts:
   ```bash
   npm update
   ```

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Allure Reporting](https://docs.qameta.io/allure/)

## 📄 License

This project is licensed under the ISC License.
