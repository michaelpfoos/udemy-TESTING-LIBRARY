import "@testing-library/jest-dom";

import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './mocks/server'

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())