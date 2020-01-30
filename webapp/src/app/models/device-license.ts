import { User } from './user';
import { Device } from './device';

export class DeviceLicense {
    Id: string;
    Date: Date;
    User: User;
    Device: Device;
}
