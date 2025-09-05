import {Overlay, OverlayConfig, PositionStrategy} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {inject, Injectable} from '@angular/core';

@Injectable({

  providedIn: 'root'
})
export class OverlayService {
  private overlay = inject(Overlay);

  /**
   * Crea y abre un overlay con un componente dado.
   * @param componentType El tipo de componente a renderizar dentro del overlay.
   * @param positionStrategy La estrategia de posicionamiento para el overlay.
   * @returns Una referencia al overlay creado.
   */
  open<T>(componentType: any, positionStrategy: PositionStrategy) {
    // 1. Define la configuración del overlay.
    const config = new OverlayConfig({
      positionStrategy: positionStrategy,
      hasBackdrop: true, // Muestra un fondo oscuro detrás del overlay
      disposeOnNavigation:true,
    });

    // 2. Crea el overlay usando la configuración.
    const overlayRef = this.overlay.create(config);

    // 3. Crea un "portal" para el componente que queremos mostrar.
    const portal = new ComponentPortal(componentType);

    // 4. Adjunta el portal al overlay.
    overlayRef.attach(portal);

    // 5. Cierra el overlay cuando se hace clic en el fondo.
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    return overlayRef;
  }

  createCenterPositionStrategy(): PositionStrategy {
    // Crea una estrategia de posicionamiento que centra el overlay en la pantalla
    return this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
  }

  createTopPositionStrategy(): PositionStrategy {
    // Crea una estrategia de posicionamiento que coloca el overlay en la parte superior
    return this.overlay.position()
      .global()
      .centerHorizontally()
      .top('0px');
  }


}
