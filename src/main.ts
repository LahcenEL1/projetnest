import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Gestion de tâches')
    .setDescription("L'API de gestion de tâches")
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}/api`);

}
bootstrap();
// .addBearerAuth(
//   { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
//   'access-token', // Cela ajoutera un champ d'autorisation dans Swagger UI
// )