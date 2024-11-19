import { sdk } from '$lib/stores/sdk';
import { goto, invalidate } from '$app/navigation';
import { Dependencies } from '$lib/constants';
import { Submit, trackEvent } from '$lib/actions/analytics';
import { base } from '$app/paths';
import { uploader } from '$lib/stores/uploader';

export async function logout() {
    await sdk.forConsole.account.deleteSession('current');
    await invalidate(Dependencies.ACCOUNT);
    uploader.reset();
    trackEvent(Submit.AccountLogout);
    await goto(`${base}/login`);
}
