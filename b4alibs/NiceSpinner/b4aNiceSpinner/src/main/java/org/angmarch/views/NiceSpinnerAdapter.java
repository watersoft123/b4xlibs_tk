package main.java.org.angmarch.views;

import android.content.Context;

import java.util.List;
import main.java.org.angmarch.views.R;

/**
 * @author angelo.marchesin
 */

public class NiceSpinnerAdapter<T> extends NiceSpinnerBaseAdapter {

    private final List<T> mItems;

    public NiceSpinnerAdapter(Context context, List<T> items) {
        super(context);
        mItems = items;
    }

    @Override
    public int getCount() {
        return mItems.size() - 1;
    }

    @Override
    public T getItem(int position) {
        if (position >= mSelectedIndex) {
            return mItems.get(position + 1);
        } else {
            return mItems.get(position);
        }
    }

    @Override
    public T getItemInDataset(int position) {
        return mItems.get(position);
    }
}