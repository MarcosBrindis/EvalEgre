import { CreateUser } from '../application/usecase/CreateUser';
import { GetUser } from '../application/usecase/GetUser';
import { UpdateUser } from '../application/usecase/UpdateUser';
import { DeleteUser } from '../application/usecase/DeleteUser';
import { LoginUser } from '../application/usecase/LoguinUser';
import { CreateUserRepositoryMySQL } from '../infrastructure/database/mysql/CreateUserRepositoryMySQL';
import { GetUserRepositoryMySQL } from '../infrastructure/database/mysql/GetUserRepositoryMySQL';
import { UpdateUserRepositoryMySQL } from '../infrastructure/database/mysql/UpdateUserRepositoryMySQL';
import { DeleteUserRepositoryMySQL } from '../infrastructure/database/mysql/DeleteUserRepositoryMySQL';
import { BcryptEncryptionService } from '../infrastructure/service/BcryptEncryptionService';
import { JwtAuthService } from '../infrastructure/service/JwtAuthService';

// Repositorios
const createRepo = new CreateUserRepositoryMySQL();
const getRepo    = new GetUserRepositoryMySQL();
const updateRepo = new UpdateUserRepositoryMySQL();
const deleteRepo = new DeleteUserRepositoryMySQL();

// Servicios
const encryptionService = new BcryptEncryptionService();
const authService = new JwtAuthService();

// Casos de uso
const createUser = new CreateUser(createRepo, encryptionService);
const getUser    = new GetUser(getRepo);
const updateUser = new UpdateUser(updateRepo);
const deleteUser = new DeleteUser(deleteRepo);
const loginUser = new LoginUser(getRepo, authService);

export const dependencies = { createUser, getUser, updateUser, deleteUser, loginUser };