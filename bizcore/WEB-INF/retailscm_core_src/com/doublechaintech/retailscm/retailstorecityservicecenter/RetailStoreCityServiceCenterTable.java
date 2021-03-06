
package com.doublechaintech.retailscm.retailstorecityservicecenter;
import com.doublechaintech.retailscm.AccessKey;


public class RetailStoreCityServiceCenterTable{


	public static AccessKey withId(Object value){
		AccessKey accessKey = new AccessKey();
		accessKey.setColumnName(COLUMN_ID);
		accessKey.setValue(value);
		return accessKey;
	}
	//Add extra identifiers
	

	//only this package can use this, so the scope is default, not public, not private either nor protected
	public static final String TABLE_NAME="retail_store_city_service_center_data";
	static final String COLUMN_ID = "id";
	static final String COLUMN_NAME = "name";
	static final String COLUMN_FOUNDED = "founded";
	static final String COLUMN_BELONGS_TO = "belongs_to";
	static final String COLUMN_LAST_UPDATE_TIME = "last_update_time";
	static final String COLUMN_VERSION = "version";
 
	public static final String []ALL_CLOUMNS = {COLUMN_ID, 
		COLUMN_NAME, COLUMN_FOUNDED, COLUMN_BELONGS_TO, COLUMN_LAST_UPDATE_TIME, 
		COLUMN_VERSION};
	public static final String []NORMAL_CLOUMNS = {
		COLUMN_NAME, COLUMN_FOUNDED, COLUMN_BELONGS_TO, COLUMN_LAST_UPDATE_TIME
		};
	
	
}


