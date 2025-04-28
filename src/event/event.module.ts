import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { EventService } from './event.service';

@Module({
  imports: [ConfigurationModule],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
