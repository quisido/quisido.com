export default async function unregisterServiceWorkers(): Promise<void> {
  const registrations: readonly ServiceWorkerRegistration[] =
    await navigator.serviceWorker.getRegistrations();

  const unregistrations: Promise<boolean>[] = [];
  for (const registration of registrations) {
    unregistrations.push(registration.unregister());
  }

  await Promise.all(unregistrations);
}
