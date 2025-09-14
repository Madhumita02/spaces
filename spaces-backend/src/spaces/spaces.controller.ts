import { Controller, Get, Post, Body, Req, UseGuards, Param, Patch, Delete } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('spaces')
export class SpacesController {
  constructor(private spacesService: SpacesService) {}

  @Get()
  findAll() {
    return this.spacesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spacesService.findById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('brand_owner')
  @Post()
  create(@Req() req: any, @Body() body: any) {
    return this.spacesService.create(req.user._id || req.user.sub, body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('brand_owner')
  @Patch(':id')
  update(@Req() req: any, @Param('id') id: string, @Body() body: any) {
    return this.spacesService.update(id, req.user._id || req.user.sub, body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('brand_owner')
  @Delete(':id')
  remove(@Req() req: any, @Param('id') id: string) {
    return this.spacesService.remove(id, req.user._id || req.user.sub);
  }
}
